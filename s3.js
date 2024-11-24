
(function() {
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

  // will update, these are just for testing
  const simplestyle = {
    '.btn': 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ease-in-out',
    '.btn-primary': 'btn bg-primary text-white hover:bg-primary-hover active:bg-primary-active',
    '.btn-secondary': 'btn bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-active',
    '.btn-ghost': 'btn bg-transparent hover:bg-gray-100 active:bg-gray-200',
    '.btn-outline': 'btn border-2 border-current bg-transparent hover:bg-gray-100',
    
    '.card': 'rounded-xl bg-white shadow-md overflow-hidden',
    '.card-body': 'p-6',
    '.card-title': 'text-xl font-semibold mb-2',
    '.card-actions': 'mt-4 flex gap-2',
    
    '.alert': 'p-4 rounded-lg mb-4',
    '.alert-success': 'alert bg-green-100 text-green-800 border border-green-200',
    '.alert-error': 'alert bg-red-100 text-red-800 border border-red-200',
    '.alert-warning': 'alert bg-yellow-100 text-yellow-800 border border-yellow-200',
    
    '.form-control': 'mb-4',
    '.input': 'px-4 py-2 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
    '.label': 'block mb-2',
    '.label-text': 'text-sm font-medium text-gray-700',
    
    '.navbar': 'flex items-center justify-between px-4 py-2 bg-white shadow-sm',
    '.navbar-start': 'flex-1 flex items-center justify-start',
    '.navbar-center': 'flex-none flex items-center justify-center',
    '.navbar-end': 'flex-1 flex items-center justify-end',
    
    '.menu': 'flex gap-2',
    '.menu-horizontal': 'flex-row',
    '.menu-vertical': 'flex-col'
  }

  const style = document.createElement('style')
  style.textContent = Object.entries(simplestyle)
    .map(([selector, classes]) => `${selector} { @apply ${classes}; }`)
    .join('\n')
  document.head.appendChild(style)
})()