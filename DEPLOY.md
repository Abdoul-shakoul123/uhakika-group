# Deploy – wewe accept tu

## Link rasmi (inafunguka)

**https://abdoul-shakoul123.github.io/uhakika-group/**

Copy, bookmark, share. Repo → About (gear) → Website: weka link hii ili "Visit site" ifungue sahihi.

---

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

## Git inauliza Username / Password

GitHub haikubali password ya account kwa git. Tumia **Personal Access Token (PAT)**:

1. **Unda token:** GitHub → **Settings** (ya account) → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**. Jina (mfano "push"), chagua **repo** scope, **Generate**. **Copy** token (utaonekana mara moja tu).
2. **Kwenye PowerShell** unapo push na Git ikauliza:
   - **Username for 'https://github.com':** andika **Abdoul-shakoul123** (au username yako).
   - **Password for 'https://github.com':** **paste token** (si password ya GitHub).
3. Enter – push inaendelea.

---

## Njia mbadala: upload folda (bila GitHub Actions)

Ikiwa unapenda ku-upload mwenyewe:

1. **Build** (PowerShell):
   ```powershell
   $env:NEXT_PUBLIC_BASE_PATH = "/jina-la-repo-yako"
   npm run build
   ```
2. **Upload** maudhui yote yaliyo **ndani** ya folda **`out`** kwenye host yako (branch ya Pages, Netlify, n.k.).
