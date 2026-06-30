# GyanPeon - Frontend Visual Specification & Smart AI Planner Architecture

This repository contains the official Product Requirement Document (PRD) and Frontend Visual Specification for the **GyanPeon** landing page and its core innovation: the **10-Step Smart AI Study Planner**.

🔗 **Live Platform Demo:** [GyanPeon Live Site](https://gyanpeon-245015718876.asia-southeast1.run.app)

---

## 🎯 Project Overview
GyanPeon is a premium, all-in-one EdTech ecosystem built for Bangladeshi students (ranging from School Class 3–8 up to BCS candidates). Unlike traditional platforms that only provide static materials, this solution introduces a dynamic, data-driven **Smart AI Study Planner** that automates and customizes the student's learning journey based on real-time metrics.

---

## 🛠️ Global Design System & UI Tokens
To maintain a high-end, premium SaaS aesthetic, the frontend implementation must strictly respect the following design tokens:

*   **Primary Accent:** `#6C4CF5` (Purple) / **Secondary Accent:** `#8B5CF6`
*   **Typography:** Elegant Serif (e.g., Playfair Display) for Hero/Headings, Inter/Manrope for responsive body copy.
*   **Border Radii:** Strictly `16px` for Interactive Buttons and `20px - 24px` for Cards/Modals. *(No 8px sharp borders allowed).*
*   **Effects:** Base subtle shadow (`0 10px 30px rgba(0,0,0,0.08)`) with dynamic Glassmorphism overlays.
*   **Micro-interactions:** Smooth Framer Motion-style easing (`translateY(-6px)`) with a 200–300ms hover transition.

---

## 📅 Smart AI Study Planner — The 10-Step User Flow
The core differentiator of this architecture is the comprehensive macro-management system:

1.  **Step 1 – Entry Trigger:** High-contrast `Create My Study Plan →` CTA launching a full-screen modal wizard.
2.  **Step 2 – Profile Onboarding:** Multi-choice questionnaire capturing Target Domain (HSC/BCS/SSC), Exams Dates, Bandwidth (Hours/Day), and Weak Subjects.
3.  **Step 3 – Plan Generation:** Mid-state calculation overlay outputting optimized metrics.
4.  **Step 4 – Dual-Panel Dashboard:** Renders "Today's Agenda" checklists and a structural "Weekly Calendar Grid".
5.  **Step 5 – Dynamic Remediation Alerts:** Surfacing proactive warnings (e.g., *"Increase Mathematics study time by 30 mins"*).
6.  **Step 6 – Daily Numerical Targets:** Granular targets (e.g., Solve 20 MCQs, Finish 1 CQ).
7.  **Step 7 – Adaptive Performance Sync:** Auto-updates upcoming routines instantly based on mock test failure points (e.g., 38% Math dynamically adds target sub-topics).
8.  **Step 8 – Contextual Resource Feed:** Automated links to historical boards/institution-wise questions (e.g., DU 2024, BUET 2022).
9.  **Step 9 – Nationwide Mock Integration:** Time-sensitive notifications syncing with real-time exam timelines.
10. **Step 10 – Analytics & Streak Tracker:** Deep metrics container showcasing Syllabus Progress (72%), Accuracy (84%), and Study Streaks.

---

## 🤖 AI Tutor vs. 📅 Smart AI Planner (Differentiation)

| Feature | Core Purpose | Interaction Type |
| :--- | :--- | :--- |
| **🤖 AI Tutor** | Direct question solving, concept explanation, and instant chat help. | Micro / Immediate |
| **📅 Smart AI Study Planner** | Generates adaptive structures, comprehensive calendars, and daily automated schedules. | Macro / Long-term |

---

## 🤝 Contribution & Implementation Notes
*   **Frontend Layout:** Ensure a strict 12-column responsive layout restricted to `1320px` max container bounds.
*   **Visual Assets:** Use 3D realistic illustration styling for cards instead of typical cartoon vectors.
*   **Testimonial Guardrail:** Profile metrics and images must link to authenticated student profiles across Bangladesh.
