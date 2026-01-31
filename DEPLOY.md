# Deploy – wewe accept tu

## Link ya tovuti (inayofanya kazi)

**404 kwenye .../en/plans?** Copy-paste link hii kwenye address bar (si .../en/plans):

**https://abdoul-shakoul123.github.io/uhakika-group/**

Bookmark link hii; usibookmark .../en/plans peke yake.  
Repo → About (gear) → Website: weka link hii ili "Visit site" ifungue sahihi.

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

---

## Custom domain (https://www.uhakikagroup.com) — **optional, siku tukipata pesa**

Tovuti inafanya kazi kwenye **https://abdoul-shakoul123.github.io/uhakika-group/** bila domain. Custom domain ni chaguo: siku utakaponunua domain (uhakikagroup.com), fuata hatua hapa chini. Kwa sasa unaweza kuacha hii.

### 1. GitHub Pages

- Repo → **Settings** → **Pages** → **Custom domain**
- Andika: **www.uhakikagroup.com** → **Save**

### 2. DNS (mahali uliponunua domain)

Ingia kwenye paneli ya DNS (Namecheap, GoDaddy, Cloudflare, n.k.):

| Type  | Name/Host | Value/Target                 |
|-------|-----------|-----------------------------|
| CNAME | `www`     | `abdoul-shakoul123.github.io` |

- **Save** record.
- **TTL:** 300 au Auto.

### 3. Subiri na thibitisha

- Subiri **dakika 5–30** (DNS inasambaa).
- GitHub → **Settings** → **Pages** → bonyeza **"Check again"** chini ya Custom domain.
- Ikiwa DNS iko sawa, hitilafu ya "ADNS check unsuccessful" itapotea.
- Chagua **Enforce HTTPS** → **Save**.

### 4. Jaribu

- Fungua **https://www.uhakikagroup.com** — tovuti inapaswa kuonekana.

**Cloudflare:** Weka **Proxy** kwa CNAME ya www kuwa **DNS only** (grey cloud) mpaka GitHub ithibitishe.

### 5. Troubleshooting "ADNS check unsuccessful"

- **Domain lazima iwe registered** — uhakikagroup.com inabidi iwe kununuliwa kwenye registrar (Namecheap, GoDaddy, n.k.). Ikiwa haijasajiliwa, DNS haitafanya kazi.
- **DNS inasetwa mahali sahihi** — kwenye paneli ya **DNS** ya yule anayemiliki domain (nameservers za uhakikagroup.com). Ikiwa domain inatumia Cloudflare nameservers, set CNAME kwenye Cloudflare.
- **Thibitisha DNS:** PowerShell: `nslookup -type=CNAME www.uhakikagroup.com` — inapaswa kuonyesha `abdoul-shakoul123.github.io`. Ikiwa inasema "Non-existent domain", domain haijasajiliwa au DNS haijaseti.
- Subiri **dakika 10–60** baada ya kuongeza CNAME, kisha **Check again** kwenye GitHub.

---

## Njia mbadala: upload folda (bila GitHub Actions)

Ikiwa unapenda ku-upload mwenyewe:

1. **Build** (PowerShell):
   ```powershell
   $env:NEXT_PUBLIC_BASE_PATH = "/jina-la-repo-yako"
   npm run build
   ```
2. **Upload** maudhui yote yaliyo **ndani** ya folda **`out`** kwenye host yako (branch ya Pages, Netlify, n.k.).
