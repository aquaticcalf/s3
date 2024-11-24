(function() {

  const loadtailwind = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://aqclf.xyz/tailwind.css'
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  const css = () => {
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: 'rgb(var(--primary, 59 130 246))',
              hover: 'rgb(var(--primary-hover, 37 99 235))',
              active: 'rgb(var(--primary-active, 29 78 216))'
            },
            secondary: {
              DEFAULT: 'rgb(var(--secondary, 107 114 128))',
              hover: 'rgb(var(--secondary-hover, 75 85 99))',
              active: 'rgb(var(--secondary-active, 55 65 81))'
            }
          }
        }
      }
    }

    // testing
    const simplestyle = {
      // layout
      '.container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      
      // buttons
      '.btn': 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ease-in-out',
      '.btn-primary': 'btn bg-primary text-white hover:bg-primary-hover active:bg-primary-active',
      '.btn-secondary': 'btn bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-active',
      '.btn-ghost': 'btn bg-transparent hover:bg-gray-100 active:bg-gray-200',
      '.btn-outline': 'btn border-2 border-current bg-transparent hover:bg-gray-100',
      '.btn-sm': 'px-3 py-1.5 text-sm',
      '.btn-lg': 'px-6 py-3 text-lg',
      
      // cards
      '.card': 'rounded-xl bg-white shadow-md overflow-hidden',
      '.card-body': 'p-6',
      '.card-title': 'text-xl font-semibold mb-2',
      '.card-actions': 'mt-4 flex gap-2',
      '.card-image': 'w-full h-48 object-cover',
      
      // alerts
      '.alert': 'p-4 rounded-lg mb-4 border',
      '.alert-success': 'alert bg-green-100 text-green-800 border-green-200',
      '.alert-error': 'alert bg-red-100 text-red-800 border-red-200',
      '.alert-warning': 'alert bg-yellow-100 text-yellow-800 border-yellow-200',
      '.alert-info': 'alert bg-blue-100 text-blue-800 border-blue-200',
      
      // forms
      '.form-control': 'mb-4',
      '.input': 'px-4 py-2 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
      '.label': 'block mb-2',
      '.label-text': 'text-sm font-medium text-gray-700',
      '.helper-text': 'text-xs text-gray-500 mt-1',
      
      // navigation
      '.navbar': 'flex items-center justify-between px-4 py-2 bg-white shadow-sm',
      '.navbar-start': 'flex-1 flex items-center justify-start',
      '.navbar-center': 'flex-none flex items-center justify-center',
      '.navbar-end': 'flex-1 flex items-center justify-end',
      
      // lists
      '.list': 'space-y-1',
      '.list-item': 'flex items-center',
      '.list-bordered': 'divide-y divide-gray-200',
      
      // badges
      '.badge': 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      '.badge-primary': 'badge bg-primary text-white',
      '.badge-secondary': 'badge bg-secondary text-white',
      
      // grid
      '.grid-cols-auto': 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
      
      // utilities
      '.shadow-smooth': 'shadow-lg shadow-gray-200/50',
      '.transition-smooth': 'transition-all duration-300 ease-in-out'
    }

    const style = document.createElement('style')
    style.textContent = Object.entries(simplestyle)
      .map(([selector, classes]) => `${selector} { @apply ${classes}; }`)
      .join('\n')
    document.head.appendChild(style)

  //   const defaultstyles = document.createElement('style')
  //   defaultStyles.textContent = `
  //     :root {
  //       --primary: 59 130 246;
  //       --primary-hover: 37 99 235;
  //       --primary-active: 29 78 216;
  //       --secondary: 107 114 128;
  //       --secondary-hover: 75 85 99;
  //       --secondary-active: 55 65 81;
  //     }
  //   `
  //   document.head.appendChild(defaultstyles)
  }

  // Initialize everything
  loadTailwind()
    .then(css)
    .catch(console.error)
})();
