# Deployment Guide - Vercel

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- MongoDB Atlas account (for database)
- Cloudinary account (for file uploads)

## Step-by-Step Deployment

### 1. Prepare Environment Variables

Collect the following information:

#### MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster or use existing one
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/drom-payment`

#### JWT Secret
Generate a secure random string:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

#### Cloudinary
1. Sign up at [Cloudinary](https://cloudinary.com)
2. Get from Settings:
   - Cloud Name
   - API Key
   - API Secret

### 2. Push to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/dormitory.git

# Push code
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

#### Option A: Using Vercel Website (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Choose your GitHub repository
5. Fill in environment variables:
   - `DATABASE_URL` - MongoDB connection string
   - `JWT_SECRET` - Your generated JWT secret
   - `CLOUDINARY_CLOUD_NAME` - From Cloudinary
   - `CLOUDINARY_API_KEY` - From Cloudinary
   - `CLOUDINARY_API_SECRET` - From Cloudinary
6. Click "Deploy"

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel

# Set environment variables when prompted
# Or add them via: vercel env add
```

### 4. Post-Deployment Setup

#### Create Admin User

After deployment, create an admin user:

```bash
# Option 1: Using the admin creation script
npm run create-admin

# Follow the prompts to create admin account
```

#### Or Manually via API

```bash
curl -X POST https://your-deployment-url.vercel.app/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin",
    "room": "OFFICE",
    "email": "admin@example.com",
    "password": "secure-password",
    "role": "admin"
  }'
```

### 5. Verify Deployment

- Visit your deployment URL
- Try logging in with admin credentials
- Test basic features:
  - Login/Register
  - View bills
  - Upload payment slip
  - Admin dashboard

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for JWT tokens | Random 32+ character string |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud identifier | `mycloud123` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | From dashboard |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | From dashboard |

## Troubleshooting

### Build Fails with "generate is not a function"
- This has been patched in the codebase
- If issue persists, try redeploying

### Database Connection Error
- Verify `DATABASE_URL` is correct
- Check MongoDB Atlas IP whitelist includes Vercel IPs
- Add `0.0.0.0/0` to whitelist (less secure but works)

### File Upload Issues
- Verify Cloudinary credentials
- Check file size limits (default: 10MB)
- Ensure CORS is configured in Cloudinary

### Authentication Issues
- Clear browser cookies
- Verify `JWT_SECRET` is set correctly
- Check token expiration in logs

## Monitoring

### Vercel Dashboard
- View logs: https://vercel.com/dashboard
- Monitor deployments
- Check analytics

### Database Monitoring
- MongoDB Atlas: https://cloud.mongodb.com
- Check connection metrics
- Monitor storage usage

## Scaling

As your app grows:

1. **Database**: Upgrade MongoDB Atlas tier
2. **Storage**: Increase Cloudinary quota
3. **CDN**: Vercel automatically optimizes images
4. **Functions**: Vercel scales serverless functions automatically

## Updates & Maintenance

To deploy updates:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Vercel will automatically redeploy when you push to main branch.

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- MongoDB Docs: https://docs.mongodb.com
- Cloudinary Docs: https://cloudinary.com/documentation
