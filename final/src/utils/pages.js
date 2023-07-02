
const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'about', path: '/about', anchorable: false });
pages.set('menu', { name: 'Menu', path: '/menu', anchorable: false });
pages.set('bookings', { 
  name: 'Reservations', 
  path: '/bookings', 
  anchorable: true 
});
pages.set('confirmedBooking', { 
  name: 'Confirmed Booking', 
  path: '/confirmed-booking', 
  anchorable: false 
});
pages.set('orderOnline', { 
  name: 'Order Online', 
  path: '/order-online', 
  anchorable: false 
});
pages.set('login', { name: 'Login', path: '/login', anchorable: false });

export default pages;
