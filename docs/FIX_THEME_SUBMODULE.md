# Fix Theme Submodule

The theme at `themes/stack/` was originally a git submodule pointing to `enkr1/hugo-theme-enkr`, but the submodule link is broken. Theme files are currently tracked directly in the main repo.

## Goal

Restore proper submodule setup so theme changes are maintained in a separate repo.

## Steps

### 1. Clone hugo-theme-enkr repo separately

```bash
cd /Users/enkr/Personal
git clone https://github.com/enkr1/hugo-theme-enkr.git
```

### 2. Copy current theme changes to cloned repo

```bash
# Copy modified files (check git diff for what changed)
cp -r /Users/enkr/Personal/journal-app/hugo/themes/stack/* /Users/enkr/Personal/hugo-theme-enkr/

# Or selectively copy only changed files:
# - assets/scss/grid.scss
# - assets/scss/partials/layout/article.scss
# - i18n/en.yaml
# - layouts/_default/single.html
```

### 3. Commit and push changes to hugo-theme-enkr

```bash
cd /Users/enkr/Personal/hugo-theme-enkr
git add .
git commit -m "sync: merge customizations from blog repo"
git push origin main
```

### 4. Remove broken submodule from main repo

```bash
cd /Users/enkr/Personal/journal-app/hugo

# Remove submodule entry from .gitmodules
git config -f .gitmodules --remove-section submodule.themes/stack

# Remove submodule entry from .git/config
git config --remove-section submodule.themes/stack 2>/dev/null || true

# Remove the submodule directory from git index
git rm --cached themes/stack

# Remove the actual files
rm -rf themes/stack

# Remove submodule metadata
rm -rf .git/modules/themes/stack

# Commit the removal
git add .gitmodules
git commit -m "chore: remove broken theme submodule"
```

### 5. Re-add submodule with proper link

```bash
cd /Users/enkr/Personal/journal-app/hugo

git submodule add https://github.com/enkr1/hugo-theme-enkr.git themes/stack
git commit -m "chore: re-add theme as proper submodule"
```

### 6. Verify submodule works correctly

```bash
# Check submodule status
git submodule status

# Should show something like:
# abc1234 themes/stack (heads/main)

# Test hugo build
hugo server
```

## Future Workflow

After fixing, theme updates work like this:

```bash
# Make changes in theme repo
cd /Users/enkr/Personal/hugo-theme-enkr
# edit files...
git add . && git commit -m "feat: add feature"
git push

# Update submodule in blog repo
cd /Users/enkr/Personal/journal-app/hugo
git submodule update --remote themes/stack
git add themes/stack
git commit -m "chore: update theme submodule"
```
