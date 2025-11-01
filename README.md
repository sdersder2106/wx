# 🛡️ Base44 - PtaaS Platform (BlueSphere)

## 🚀 Plateforme professionnelle de Penetration Testing as a Service

Une plateforme complète pour gérer les pentests, vulnérabilités, rapports et audits de sécurité.

---

## ⚡ Quick Start

### 1️⃣ Installation

```bash
# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env
```

### 2️⃣ Configuration Base de Données

Créez un compte sur [Supabase](https://supabase.com) ou utilisez PostgreSQL local.

Modifiez `.env` :

```env
DATABASE_URL="postgresql://user:password@localhost:5432/base44"
NEXTAUTH_SECRET="générez-avec: openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"
```

### 3️⃣ Migrations Prisma

```bash
# Créer les tables
npx prisma db push

# (Optionnel) Ouvrir Prisma Studio
npx prisma studio
```

### 4️⃣ Lancer l'application

```bash
# Mode développement
npm run dev

# Ouvrir http://localhost:3000
```

---

## 📂 Structure du Projet

```
base44-ptaas/
├── app/
│   ├── (auth)/              # Pages d'authentification
│   ├── (dashboard)/         # Pages du dashboard
│   │   ├── pentests/        # Gestion des pentests
│   │   ├── vulnerabilities/ # Gestion des vulnérabilités
│   │   ├── targets/         # Gestion des cibles
│   │   └── reports/         # Rapports
│   └── api/                 # API Routes
├── components/
│   ├── layout/              # Sidebar, Header
│   ├── dashboard/           # KPI Cards
│   └── charts/              # Graphiques Recharts
├── lib/
│   ├── prisma.ts            # Client Prisma
│   └── utils.ts             # Utilitaires
├── prisma/
│   └── schema.prisma        # Schéma de base de données
└── types/
    └── index.ts             # Types TypeScript
```

---

## 🎨 Features Implémentées

### ✅ Frontend
- [x] Dashboard avec KPIs (Total Pentests, Targets, Vulnerabilities, Critical)
- [x] Sidebar avec navigation (BlueSphere logo)
- [x] Header avec recherche et notifications
- [x] 3 Graphiques :
  - Vulnerabilities by Severity (Radar Chart)
  - Impacted Compliance (Bar Chart)
  - Vulnerability Breakdown (Line Chart)
- [x] Design responsive avec Tailwind CSS
- [x] Couleurs exactes de la maquette BlueSphere

### 🚧 À Implémenter (Prochaines Étapes)

#### Phase 1 - Authentification
- [ ] Page Login
- [ ] Configuration NextAuth.js
- [ ] Gestion des rôles (Admin/Client/Pentester)
- [ ] Privacy rules

#### Phase 2 - Pages CRUD
- [ ] Page Pentests (liste + détails)
- [ ] Page Vulnerabilities (filtres + modal)
- [ ] Page Targets
- [ ] Page Reports

#### Phase 3 - API Routes
- [ ] `/api/pentests` - CRUD pentests
- [ ] `/api/findings` - CRUD vulnerabilities
- [ ] `/api/targets` - CRUD targets
- [ ] `/api/stats` - KPIs dashboard
- [ ] `/api/reports` - Upload/Download

#### Phase 4 - Fonctionnalités Avancées
- [ ] Système de notifications en temps réel
- [ ] Upload de fichiers (rapports, preuves)
- [ ] Génération de rapports PDF
- [ ] Audit Logs
- [ ] Tickets support

---

## 🔐 Sécurité

### Privacy Rules
- **Admins** : Accès complet
- **Clients** : Voir uniquement les données de leur company
- **Pentesters** : Accès uniquement aux pentests assignés

### Implémentation
Les privacy rules seront ajoutées dans :
1. Middleware Next.js
2. API Routes (vérification serveur)
3. Prisma queries (filtrage par company)

---

## 🛠️ Technologies

- **Frontend** : Next.js 14, React, TypeScript, Tailwind CSS
- **Backend** : Next.js API Routes, Prisma ORM
- **Base de données** : PostgreSQL (Supabase)
- **Auth** : NextAuth.js
- **Charts** : Recharts
- **Deployment** : Vercel

---

## 📊 Modèle de Données

### Entités Principales
- **User** (Admin/Client/Pentester)
- **Company**
- **Target** (Web App/API/Cloud/Host)
- **Pentest**
- **Finding** (Vulnerability)
- **Report**
- **Notification**
- **AuditLog**
- **Ticket**

Voir `prisma/schema.prisma` pour le schéma complet.

---

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# 1. Push sur GitHub
git push origin main

# 2. Connecter à Vercel
# - Importer le repo
# - Configurer les variables d'environnement
# - Déployer !
```

### Variables d'environnement Vercel
```
DATABASE_URL=...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://votre-domaine.vercel.app
```

---

## 📖 Commandes Utiles

```bash
# Développement
npm run dev

# Build production
npm run build
npm run start

# Prisma
npx prisma studio          # Interface DB
npx prisma db push         # Sync schema
npx prisma generate        # Générer client

# Linting
npm run lint
```

---

## 🎯 Prochaines Actions

1. **Connecter des vraies données**
   - Remplacer les mockData par des appels API
   - Créer les API routes

2. **Ajouter l'authentification**
   - Implémenter NextAuth.js
   - Protéger les routes

3. **Créer les pages CRUD**
   - Pentests, Vulnerabilities, Targets, Reports

4. **Déployer en production**
   - Vercel + Supabase

---

## 📝 Notes

- Le design suit exactement la maquette BlueSphere fournie
- Les couleurs et le logo sont fidèles au design original
- Architecture scalable pour Phase 2 (Production)

---

## 🤝 Support

Pour toute question sur l'implémentation, consultez la documentation ou créez une issue.

**Développé avec ❤️ pour Base44**
