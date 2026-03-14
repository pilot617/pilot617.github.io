---
title: "Hello World — Welcome to My Blog"
date: "2026-03-14"
description: "A quick intro to why I started this blog and what you can expect — tech deep-dives, career reflections, and side-project updates."
tags: ["personal", "intro"]
---

# Hello World

Welcome to my corner of the internet! I'm Sampat, a Senior Software Engineer currently working on voice AI systems at Prodigal. Before that, I spent a few years at Microsoft building authentication & authorization infrastructure.

## Why a blog?

I've been meaning to start writing for a while now. Over the years, I've collected a handful of lessons — from designing permission models at scale, to wiring up LLM-powered voice agents, to debugging obscure .NET middleware at 2 AM — that I think are worth sharing.

This blog will be a mix of:

- **Tech deep-dives** — walkthroughs of systems I've built or problems I've solved.
- **Career reflections** — things I wish someone had told me earlier.
- **Side-project logs** — updates on whatever I'm tinkering with outside work.

## What's coming next

I'm planning a post on how we built the voice orchestration pipeline at Prodigal — stitching together STT, LLMs, and TTS into a real-time conversation loop. Stay tuned.

```python
# Here's a taste of what a voice agent loop looks like
async def run_agent(call):
    async for transcript in call.stt_stream():
        response = await llm.generate(transcript)
        await call.tts_speak(response)
```

Thanks for reading. If you want to chat, feel free to reach out on [LinkedIn](https://www.linkedin.com/in/sampat-choudhary-996b75155/) or drop me an [email](mailto:sampat0choudhary@gmail.com).
