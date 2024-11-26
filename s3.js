(() => {
  const custom_classes = {
    // Layout
    'container': 'max-w-7xl mx-auto px-6 sm:px-8 lg:px-10',
    
    // Buttons
    'btn': 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ease-bounce transform hover:scale-105 active:scale-95',
    'btn-primary': 'bg-pink-400 text-white hover:bg-pink-300 active:bg-pink-500 shadow-lg shadow-pink-200',
    'btn-secondary': 'bg-purple-400 text-white hover:bg-purple-300 active:bg-purple-500 shadow-lg shadow-purple-200',
    'btn-ghost': 'bg-transparent hover:bg-pink-50 active:bg-pink-100 text-pink-400',
    'btn-outline': 'border-3 border-pink-400 bg-transparent hover:bg-pink-50 text-pink-400',
    'btn-sm': 'px-4 py-2 text-sm',
    'btn-lg': 'px-8 py-4 text-lg',
    
    // Cards
    'card': 'rounded-3xl bg-white shadow-xl overflow-hidden border-2 border-pink-100 hover:shadow-2xl hover:border-pink-200 transition-all duration-300',
    'card-body': 'p-8',
    'card-title': 'text-2xl font-bold mb-4 text-purple-600',
    'card-actions': 'mt-6 flex gap-4',
    'card-image': 'w-full h-56 object-cover hover:scale-105 transition-transform duration-300',
    
    // Alerts
    'alert': 'p-6 rounded-2xl mb-6 border-2 shadow-lg',
    'alert-success': 'bg-green-50 text-green-600 border-green-200 shadow-green-100',
    'alert-error': 'bg-red-50 text-red-600 border-red-200 shadow-red-100',
    'alert-warning': 'bg-yellow-50 text-yellow-600 border-yellow-200 shadow-yellow-100',
    'alert-info': 'bg-blue-50 text-blue-600 border-blue-200 shadow-blue-100',
    
    // Utilities
    'shadow-smooth': 'shadow-xl shadow-pink-100/50',
    'transition-smooth': 'transition-all duration-300 ease-bounce',
  }

  const replace_custom_classes = () => {
    Object.entries(custom_classes).forEach(([customClass, tailwindClasses]) => {
      const elements = document.querySelectorAll(`.${customClass}`)
      elements.forEach(element => {
        element.classList.remove(customClass)
        element.classList.add(...tailwindClasses.split(' '))
      })
    })
  }

  const init = () => {
    if (typeof window.tailwind === 'undefined') {
      console.error('✨ Oopsie! Tailwind CSS is not loaded. Please include the Tailwind CDN first! ✨')
      return
    }
    replace_custom_classes()
    console.log('✨ Yay! Custom classes have been applied! ✨')
  }

  document.addEventListener('DOMContentLoaded', init)
})()