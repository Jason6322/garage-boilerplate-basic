# Test Report - Bootstrap Restyling Feature (Login -> Team Page)

**Project:** Team 46B - Task 2 Mock Sprint
**Feature under test:** Restyled login page -> auth redirect -> team page
**Tester (Dev 2):** Saneli Thathsari Ratnayake
**Developer (Dev 1):** Jason Xu
**Date:** 13/08/2026
**Environment:** Deployed URL - https://garage-boilerplate-basic-frontend-rl0u2jpbx-garage-boilerplate.vercel.app (redeployed after BUG-01 fix, retested here)

---

## 1. Test Cases

| Test Case ID | Description | Related Requirement / User Story | Test Steps & Input Data | Expected Result | Actual Result | Pass / Fail | Assigned To |
|---|---|---|---|---|---|---|---|
| TC-01 | Valid login end-to-end | Card: Test Login -> Redirect -> Team Page | 1. Go to deployed URL 2. Enter valid credentials 3. Submit | User is authenticated successfully | Signed up / logged in with saneli758+test1@gmail.com - redirected to Dashboard ("Welcome back, Saneli") | Pass | Saneli |
| TC-02 | Redirect to team page confirmed | Card: Test Login -> Redirect -> Team Page | 1. Complete valid login 2. Observe destination | Browser redirects to team page automatically | Retested after Jason's fix on feature/team-page - login now redirects straight to Team page | Pass | Saneli |
| TC-03 | Team page content verified complete | Card: Test Login -> Redirect -> Team Page | 1. Land on team page 2. Check team name, all member cards (photo/name/role), blurb | All required fields render correctly per design | Team name ("Team 46B"), all 5 member cards with name, role, and blurb render correctly | Pass | Saneli |
| TC-04 | Invalid login rejected | Card: Test Edge Cases & Log Bugs | 1. Go to deployed URL 2. Enter wrong password / invalid email 3. Submit | Login is rejected with a clear error, no access granted | "Invalid email or password" error shown, access denied | Pass | Saneli |
| TC-05 | Direct team-page access blocked without login | Card: Test Edge Cases & Log Bugs | 1. Without logging in, navigate directly to the team page URL | User is redirected to login, team page is not accessible | Navigating to /team while logged out redirects straight to the Sign in page | Pass | Saneli |
| TC-06 | Missing photo handled gracefully | Card: Test Edge Cases & Log Bugs | 1. View a member card with no photo set | Page shows a placeholder/fallback, no broken image or layout break | All 5 members have no photo set - each falls back to an initials avatar (e.g. "SR", "JX"), no broken images or layout issues | Pass | Saneli |
| TC-07 | Unusually long blurb handled gracefully | Card: Test Edge Cases & Log Bugs | 1. View a member card with an extra-long blurb | Text wraps/truncates cleanly, no layout break | Blurbs truncate cleanly to 2 lines with ellipsis on all member cards, matching Figma spec ("2-line max, truncated") - no layout break | Pass | Saneli |

---

## 2. Bug Log

*(Only fill in rows for bugs actually found. If none found for a test case, note "No bugs found - confirmed" in the Actual Result column above instead.)*

| Bug ID | Related Test Case | Severity | Priority | Description | Steps to Reproduce | Expected vs Actual | Screenshot / Evidence | Assigned To (Dev 1) | Resolution Status | Retest Result |
|---|---|---|---|---|---|---|---|---|---|---|
| BUG-01 | TC-02 | Low | Medium | Login does not redirect to the Team page as expected; lands on Dashboard instead | 1. Go to localhost:3000 (or deployed URL once live) 2. Log in with valid credentials 3. Observe landing page | Expected: redirect straight to Team page / Actual: redirects to Dashboard, Team page only reachable via sidebar nav | N/A | Jason | Fixed | Pass |

---

## 3. Summary

- Total test cases: 7
- Passed: 7
- Failed: 0
- Bugs logged: 1 (BUG-01, found and fixed during testing)
- Overall status: All acceptance criteria met. One bug found (login redirect landing on Dashboard instead of Team page) - fixed by Dev 1 and retested, now passing.

---

## Handoff Notes (for Planner cards)

**Done:** Completed login/redirect happy-path testing and edge case testing (valid/invalid login, redirect, team page content, missing photo, long blurb, direct access without login). All 7 test cases pass.
**Deliverable:** This document - `docs/TEST-REPORT.md` in the repo, linked from both testing cards.
**Note for next role:** One bug found (BUG-01: login redirected to Dashboard instead of Team page) - fixed by Jason on `feature/team-page` and retested, now passing. Ready for PM sign-off.
