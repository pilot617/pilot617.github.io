---
title: "Handling Long-Running Tool Calls While Maintaining Conversational Continuity"
date: "2026-03-21"
description: "How we made long-running tool calls reliable in voice AI despite user interruptions."
tags: ["voice-ai", "llm", "tool-calling", "reliability"]
---

Voice AI systems are fundamentally different from traditional chat-based systems.

In a chat UI, users typically wait for a response.  
In voice systems, interruptions are the norm, not the exception.

This creates a unique challenge when Large Language Models (LLMs) interact with long-running tools like payment APIs.

In this blog, I'll walk through a real-world problem we faced, why it happens, and how we designed a robust system to fix it.

---

## The Problem

We were building a platform with multiple voice AI agents. These agents could:

- Talk to users in real-time
- Call external tools (e.g., payments API)
- Continue conversations naturally

The tricky part?

Users interrupt a lot.

---

## Failure Scenario

1. LLM initiates a tool call (e.g., payment)
2. Tool execution takes time (1-30 seconds)
3. User interrupts mid-response
4. System moves to next turn
5. LLM forgets the tool call ever happened

---

## Why This Is Dangerous

- The payment might actually succeed
- But the LLM:
  - Doesn't know it initiated a payment
  - Doesn't receive the result
- Result:
  - User is not informed
  - System becomes inconsistent
  - Critical operations (like payments) become unreliable

---

## Root Cause

LLMs are stateless per turn.

They only know what's present in the conversation transcript.

When an interruption happens:

- The current turn is abandoned
- The tool call context is lost
- There's no memory of in-flight operations

---

## Design Goal

We wanted the system to behave like a human agent:

> "Your payment is being processed..."  
> (user interrupts)  
> "Sure, I can help with that..."  
> (later)  
> "By the way, your payment just went through."

---

## The Solution

We redesigned the system around one key idea:

> Tool execution should be independent of LLM turns

---

## Step-by-Step Design

### 1. Decouple Tool Execution from LLM Turns

Instead of tying tool calls to a single LLM turn:

- Tool calls are executed asynchronous background tasks
- Each tool call is tracked using a unique tool ID

---

### 2. Handle Interruptions Gracefully

When an interruption occurs:

- Do NOT discard the tool call
- Continue execution in the background

---

### 3. Inject a Placeholder into the Transcript

To ensure the LLM doesn't forget:

We insert a synthetic tool result like:

```
Tool Result:
"Your payment is being processed in the background."
```

This ensures:

- The LLM is aware something is ongoing
- Conversation can continue naturally

---

### 4. Continue the Conversation

Now the system can:

- Handle the interruption
- Respond to new user queries
- Maintain conversational flow

---

### 5. Reconcile When Tool Completes

Once the tool finishes, we perform two actions:

---

#### A) Update the Transcript (Reconciliation)

We replace the placeholder with the actual result:

```
"Processing..."
   ->
"Payment successful"
```

This keeps the transcript as the source of truth.

---

#### B) Inject a Temporary System Instruction

We add a system message like:

```
System:
"The background payment (tool_id=xyz) has completed.
Inform the user immediately. This is high priority."
```

This ensures:

- The LLM prioritizes notifying the user
- The result is not ignored

---

### 6. Cleanup

After the next LLM turn:

- Remove the temporary system instruction
- Keep the final tool result in the transcript

---

## Architecture Overview

```
User Speech
->
Speech-to-Text
->
LLM Turn (may trigger tool)
->
Tool Execution (Async Background Task)
->
[Interruption Handling Layer]
->
Transcript (Source of Truth)
->
Tool Completion Event
->
Reconciliation + System Prompt Injection
->
Next LLM Turn
```

---

## Key Design Principles

### 1. Async Tool Execution

Tool calls should not block or depend on a single LLM turn.

---

### 2. Transcript as State

The conversation transcript becomes the single source of truth.

We explicitly inject:

- Placeholder results
- Final results

---

### 3. Event-Driven Updates

Tool completion triggers:

- Transcript reconciliation
- System prompt injection

---

### 4. System Prompt Steering

Temporary system messages guide LLM behavior when needed.

---

### 5. Idempotency & Tracking

Each tool call is:

- Assigned a unique ID
- Tracked throughout its lifecycle

---

## Results

With this approach:

- No tool calls are lost due to interruptions
- Users are always informed of outcomes
- System behaves like a human conversational agent
- Works reliably even for long-running APIs

---

## Lessons Learned

1. Voice != Chat
   - Interruptions must be treated as first-class citizens
2. LLMs need explicit state
   - If it's not in the transcript, it doesn't exist
3. Async systems need reconciliation
   - Background work must rejoin the conversation
4. Design for real-world behavior
   - Humans don't "forget" tasks when interrupted; your system shouldn't either

---

## Future Improvements

- Timeout handling for long-running tools
- Retry + failure recovery strategies
- Better prioritization of multiple concurrent tool calls
- Persistent event logs for debugging

---

## Final Thoughts

This problem sits at the intersection of:

- Distributed systems
- Conversational AI
- Real-time voice interfaces

As voice AI becomes more common, handling interruptions correctly will become a core requirement, not an edge case.

Designing systems that behave like humans in conversations is not just about better UX, it's about correctness and reliability.

---
