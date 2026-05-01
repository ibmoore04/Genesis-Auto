# Genesis Auto Header Component Setup

## ✅ What's Been Implemented

### 1. **Tailwind CSS Integration**
- Installed Tailwind CSS, PostCSS, and Autoprefixer
- Created `tailwind.config.js` with custom Genesis Auto colors
- Created `postcss.config.js` for processing
- Updated `src/style.css` with Tailwind directives

### 2. **Reusable Header Component** (`src/components/AppHeader.vue`)
Built with Tailwind CSS utility classes featuring:

#### Desktop Header (screens ≥ 1024px):
- White background with bottom border
- Genesis Auto logo image from `/public/genesis-logo.png`
- Navigation menu with hover effects
- Right-side action icons (Compare, Wishlist, Cart)
- Red menu button with 9-dot grid icon
- Responsive layout with flexbox

#### Mobile Header (screens < 1024px):
- Dark background (#1a1a1a)
- Hamburger menu button (left)
- Centered Genesis Auto logo
- Shopping cart icon (right)
- Touch-friendly spacing

### 3. **Custom Colors**
Defined in `tailwind.config.js`:
- `genesis-red`: #e63946
- `genesis-dark`: #1a1a1a

## 🚀 How to Run

```bash
npm run dev
```

Visit the local development server URL shown in the terminal.

## 📁 File Structure

```
Genesis-Autos/
├── public/
│   └── genesis-logo.png          # Logo image
├── src/
│   ├── components/
│   │   └── AppHeader.vue         # Reusable header component
│   ├── App.vue                   # Main app component
│   ├── main.js                   # App entry point
│   └── style.css                 # Global styles with Tailwind
├── tailwind.config.js            # Tailwind configuration
└── postcss.config.js             # PostCSS configuration
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      'genesis-red': '#your-color',
      'genesis-dark': '#your-color',
    },
  },
}
```

### Modify Breakpoint
The mobile/desktop breakpoint is at `1024px` (Tailwind's `lg` breakpoint).
Change by using different Tailwind breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`

### Add Navigation Items
Edit the `<nav>` section in `AppHeader.vue`:
```vue
<a href="#" class="text-black text-sm font-semibold tracking-wide hover:text-genesis-red transition-colors">
  YOUR LINK
</a>
```

## 🔧 Tailwind Classes Used

- **Layout**: `flex`, `hidden`, `lg:block`, `lg:hidden`
- **Spacing**: `px-10`, `py-5`, `gap-8`, `mx-auto`
- **Sizing**: `w-full`, `h-[70px]`, `max-w-[1400px]`
- **Colors**: `bg-white`, `text-genesis-red`, `bg-genesis-dark`
- **Typography**: `text-sm`, `font-semibold`, `tracking-wide`
- **Effects**: `hover:text-genesis-red`, `transition-colors`

## 📱 Responsive Design

The header automatically adapts:
- **Desktop (≥1024px)**: Full navigation menu with all links visible
- **Mobile (<1024px)**: Compact header with hamburger menu

## 🎯 Next Steps

1. Add dropdown menu functionality for navigation items
2. Implement mobile menu slide-out panel
3. Add shopping cart counter badge
4. Connect navigation links to actual routes
5. Add smooth scroll or page transitions
