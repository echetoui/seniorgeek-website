#!/bin/bash

# SeniorGeek Test Runner Script
# This script helps run different types of tests

echo "🧪 SeniorGeek Playwright Test Runner"
echo "===================================="
echo ""
echo "Choose a test option:"
echo "1. Run all tests"
echo "2. Run tests in UI mode (interactive)"
echo "3. Run tests in debug mode"
echo "4. Run specific test file"
echo "5. View test report"
echo "6. Run tests (headed - see browser)"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
  1)
    echo "Running all tests..."
    npm test
    ;;
  2)
    echo "Running tests in UI mode..."
    npm run test:ui
    ;;
  3)
    echo "Running tests in debug mode..."
    npm run test:debug
    ;;
  4)
    echo "Available test files:"
    ls -1 tests/*.spec.ts
    read -p "Enter test file name (e.g., homepage.spec.ts): " testfile
    npx playwright test tests/$testfile
    ;;
  5)
    echo "Opening test report..."
    npm run test:report
    ;;
  6)
    echo "Running tests in headed mode..."
    npx playwright test --headed
    ;;
  *)
    echo "Invalid choice. Exiting."
    exit 1
    ;;
esac

echo ""
echo "✅ Test run complete!"
