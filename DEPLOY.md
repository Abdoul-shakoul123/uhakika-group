# Deploy – wewe accept tu

## Njia rahisi (GitHub inafanya kazi, wewe kubali tu)

1. **Push mradi kwenye GitHub**  
   - Weka repo kwenye GitHub ikiwa bado haujafanya.  
   - Push branch **main** (au branch yako kuu).

2. **Washa GitHub Pages**  
   - Kwenye repo: **Settings → Pages**.  
   - Chini ya **Build and deployment**, **Source:** chagua **GitHub Actions**.

3. **Kila unapo-push**  
   - GitHub inajenga site na ku-deploy peke yake.  
   - **Ikiwa ukiona "Review pending" / "Waiting for approval":**  
     - Nenda **Actions** → run ya **Deploy to GitHub Pages** → bofya **Review deployments** → **Approve**.  
   - Baada ya approve (au ikiwa hakuna approval inayohitajika), site inakuwa live.

**URL ya site:** `https://<username>.github.io/<jina-la-repo>/`

Hiyo tu – **push, kisha accept (approve) ikiwa inaulizwa**. Hakuna upload ya folda kwa mkono.

---

## Njia mbadala: upload folda (bila GitHub Actions)

Ikiwa unapenda ku-upload mwenyewe:

1. **Build** (PowerShell):
   ```powershell
   $env:NEXT_PUBLIC_BASE_PATH = "/jina-la-repo-yako"
   npm run build
   ```
2. **Upload** maudhui yote yaliyo **ndani** ya folda **`out`** kwenye host yako (branch ya Pages, Netlify, n.k.).
