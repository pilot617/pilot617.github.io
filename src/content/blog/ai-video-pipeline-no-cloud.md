---
title: "How I Built an AI Video Pipeline with Zero Cloud APIs"
date: "2026-07-27"
description: "A fully local pipeline that takes a script and produces a professional animated video — using open-source TTS, a web-based composition framework, and ffmpeg."
tags: ["ai", "open-source", "video", "tts", "side-project"]
---

I wanted to generate a short educational video programmatically.

No Premiere. No After Effects. No cloud APIs.

Just code, open-source models, and a browser.

Here's what I built and how it works.

---

## The Goal

Generate a **60-second animated explainer video** from a script — with synthesized narration, synchronized visuals, and a final MP4 output.

The constraints I set for myself:

- No paid APIs (no ElevenLabs, no AWS Polly, no Runway)
- Everything runs locally
- Reproducible — same inputs produce the same output

---

## The Stack

| Layer | Tool |
|-------|------|
| Text-to-Speech | Kokoro-82M (ONNX) |
| Animation & Composition | HyperFrames |
| Graphics | HTML + SVG + GSAP |
| Encoding | ffmpeg |
| Transcription | whisper-cpp |

---

## Stage 1: Synthesizing the Narration

The first step is turning the script into audio.

I used **Kokoro-82M** — an 82-million parameter TTS model that runs locally via ONNX. It's Apache 2.0 licensed, fast, and produces natural-sounding speech.

The narration is split into 7 segments, each mapped to a specific time window in the video:

```python
SEGMENTS = [
    (0.6,  5.8,  "The Pythagorean theorem, explained in one minute."),
    (6.8,  12.8, "A right triangle has one square corner..."),
    # ...
]
```

Each segment is synthesized and placed at its absolute offset in a 60-second audio track.

---

### The Speed Compensation Trick

Here's the tricky part: TTS doesn't always respect your timing.

If a synthesized segment runs longer than its window, I re-synthesize it at a higher speed — up to 1.3x — until it fits:

```python
speed = 1.0
while True:
    audio = synthesize(text, speed=speed)
    if duration(audio) <= window_size or speed >= 1.3:
        break
    speed += 0.05
```

This keeps narration in sync with visuals without manual editing.

---

## Stage 2: Composing the Visuals

This is where **HyperFrames** comes in.

HyperFrames is a video composition framework where you write your scenes in HTML — using SVG for graphics and GSAP for animations. The framework renders it frame-by-frame into a video.

The key insight: instead of a timeline editor, your composition is just an HTML file.

```html
<div id="root" data-composition-id="main" data-start="0" data-duration="60">
  <audio src="assets/narration.wav" data-start="0" data-duration="60"></audio>

  <!-- Scene 1: Title (0-6s) -->
  <div class="clip" data-start="0" data-duration="6">
    ...
  </div>

  <!-- Scene 2: Triangle construction (6-36s) -->
  <div class="clip" data-start="6" data-duration="30">
    ...
  </div>
</div>
```

Each `class="clip"` element is shown only during its time window. The framework handles visibility automatically.

---

### Animations with GSAP

All animations are defined in a single GSAP timeline, registered on `window.__timelines["main"]`:

```javascript
const tl = gsap.timeline({ paused: true });
window.__timelines = window.__timelines || {};
window.__timelines["main"] = tl;

// Draw triangle edges sequentially
tl.fromTo("#edge-b", { scaleX: 0 }, { scaleX: 1, duration: 0.7 }, 6.4);
tl.fromTo("#edge-a", { scaleY: 0 }, { scaleY: 1, duration: 0.7 }, 7.0);
tl.fromTo("#edge-c", { scaleX: 0 }, { scaleX: 1, duration: 0.8 }, 7.6);
```

HyperFrames seeks the timeline to the exact frame time during rendering — no `Date.now()`, no drift. Every render is identical.

---

## Stage 3: Rendering to MP4

Once the composition is ready:

```bash
npm run render
```

HyperFrames spins up a browser preview, renders each frame, and hands it off to ffmpeg for encoding. The audio track is mixed in automatically.

Output: a 6.3 MB, 1920×1080, H.264 MP4.

---

## The Result

A 60-second Pythagorean theorem explainer with:

- AI-generated narration, timed to visual cues
- SVG diagrams animated frame-accurately
- Word-level transcript (from whisper-cpp) for potential subtitle use

No API keys. No internet connection required. Runs on a laptop.

---

## What I Liked

**Kokoro-82M is genuinely good.** For a model you can run locally, the voice quality is surprisingly natural. The speed compensation logic means you don't need to manually trim audio.

**HyperFrames makes video feel like web development.** If you know HTML, SVG, and GSAP, you already know how to write compositions. No proprietary format, no GUI dependency.

**Deterministic rendering is underrated.** Seek-based GSAP timelines mean your video looks identical every time you render. This matters a lot if you're iterating on visuals.

---

## Rough Edges

- HyperFrames is still early. Documentation is sparse and you'll hit undocumented behavior.
- Kokoro's speed adjustment degrades at 1.3x+. Writing tighter scripts upfront is easier.
- Render time scales with complexity. Simple scenes are fine; heavy SVG animations slow things down.

---

## Final Thoughts

This experiment proved that a full video production pipeline — from script to MP4 — is achievable with nothing but open-source tools and a bit of Python.

The pieces exist. Kokoro for voice. HyperFrames for composition. ffmpeg for encoding. What's missing is glue and polish.

I'm planning to generalize this into a reusable template. If that's something you'd find useful, reach out — I'd love to collaborate.

---
