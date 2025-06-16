# Dream Portal QA Automation

![Playwright Tests](screenshots/test-results.png)

## 📋 Project Overview
Automated testing solution for Dream Portal including:
- Core UI functional tests
- AI-powered dream classification (using LM Studio)
- Comprehensive test reporting

## 🛠️ Technologies Used
- **Playwright** for test automation
- **TypeScript** for test scripting
- **LM Studio** for local AI validation
- **Allure** for test reporting (optional)

## 🚀 Setup Instructions

### Prerequisites
1. Node.js v16+
2. LM Studio running locally (for AI tests)
3. Git

### Installation
```bash
git clone https://github.com/YOUR-USERNAME/dream-portal-qa.git
cd dream-portal-qa
npm install

## Basic Test Run
npx playwright test

## Run with Browser UI
npx playwright test --headed

Run Specific Tests
# Run only AI validation tests
npx playwright test src/tests/diary.spec.ts

# Run with debugging
npx playwright test --debug

🤖 AI Validation Setup
Install LM Studio

Load a suitable LLM model (e.g., Phi-3, Llama 3)

Ensure the local server is running on http://localhost:1234
