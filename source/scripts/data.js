/* Данные */

const coffee = [
  {
    url: 'images/menu/coffee/irish-coffee.jpg',
    name: 'Irish coffee',
    description:
      'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
    price: '$7.00',
  },
  {
    url: 'images/menu/coffee/kahlua-coffee.jpg',
    name: 'Kahlua coffee',
    description:
      'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
    price: '$7.00',
  },
  {
    url: 'images/menu/coffee/honey-raf.jpg',
    name: 'Honey raf',
    description: 'Espresso with frothed milk, cream and aromatic honey',
    price: '$5.50',
  },
  {
    url: 'images/menu/coffee/ice-cappuccino.jpg',
    name: 'Ice cappuccino',
    description: 'Cappuccino with soft thick foam in summer version with ice',
    price: '$5.00',
  },
  {
    url: 'images/menu/coffee/espresso.jpg',
    name: 'Espresso',
    description: 'Classic black coffee',
    price: '$4.50',
  },
  {
    url: 'images/menu/coffee/latte.jpg',
    name: 'Latte',
    description:
      'Espresso coffee with the addition of steamed milk and dense milk foam',
    price: '$5.50',
  },
  {
    url: 'images/menu/coffee/latte-macchiato.jpg',
    name: 'Latte macchiato',
    description: 'Espresso with frothed milk and chocolate',
    price: '$5.50',
  },
  {
    url: 'images/menu/coffee/coffee-with-cognac.jpg',
    name: 'Coffee with cognac',
    description: 'Fragrant black coffee with cognac and whipped cream',
    price: '$6.50',
  },
];

const tea = [
  {
    url: 'images/menu/tea/moroccan.jpg',
    name: 'Moroccan',
    description:
      'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
    price: '$4.50',
  },
  {
    url: 'images/menu/tea/ginger.jpg',
    name: 'Ginger',
    description: 'Original black tea with fresh ginger, lemon and honey',
    price: '$5.00',
  },
  {
    url: 'images/menu/tea/cranberry.jpg',
    name: 'Cranberry',
    description: 'Invigorating black tea with cranberry and honey',
    price: '$5.00',
  },
  {
    url: 'images/menu/tea/sea-buckthorn.jpg',
    name: 'Sea buckthorn',
    description:
      'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
    price: '$5.50',
  },
];

const dessert = [
  {
    url: 'images/menu/dessert/marble-cheesecake.jpg',
    name: 'Marble cheesecake',
    description:
      'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    price: '$3.50',
  },
  {
    url: 'images/menu/dessert/red-velvet.jpg',
    name: 'Red velvet',
    description: 'Layer cake with cream cheese frosting',
    price: '$4.00',
  },
  {
    url: 'images/menu/dessert/cheesecakes.jpg',
    name: 'Cheesecakes',
    description:
      'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    price: '$4.50',
  },
  {
    url: 'images/menu/dessert/creme-brulee.jpg',
    name: 'Creme brulee',
    description:
      'Delicate creamy dessert in a caramel basket with wild berries',
    price: '$4.00',
  },
  {
    url: 'images/menu/dessert/pancakes.jpg',
    name: 'Pancakes',
    description: 'Tender pancakes with strawberry jam and fresh strawberries',
    price: '$4.50',
  },
  {
    url: 'images/menu/dessert/honey-cake.jpg',
    name: 'Honey cake',
    description: 'Classic honey cake with delicate custard',
    price: '$4.50',
  },
  {
    url: 'images/menu/dessert/chocolate-cake.jpg',
    name: 'Chocolate cake',
    description: 'Cake with hot chocolate filling and nuts with dried apricots',
    price: '$5.50',
  },
  {
    url: 'images/menu/dessert/black-forest.jpg',
    name: 'Black forest',
    description:
      'A combination of thin sponge cake with cherry jam and light chocolate mousse',
    price: '$6.50',
  },
];

const coffeeOptions = {
  size: ['200 ml', '300 ml', '400 ml'],
  additives: ['Sugar', 'Cinnamon', 'Syrup'],
};

const teaOptions = {
  size: ['200 ml', '300 ml', '400 ml'],
  additives: ['Sugar', 'Lemon', 'Syrup'],
};

const dessertOptions = {
  size: ['50 g', '100 g', '200 g'],
  additives: ['Berries', 'Nuts', 'Jam'],
};

export { coffee, tea, dessert, coffeeOptions, teaOptions, dessertOptions };
