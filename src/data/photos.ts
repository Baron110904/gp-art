
import { GalleryData, Photo, PhotoCategory } from '../types';

// Photos individuelles
export const photos: Photo[] = [
  {
    id: '1',
    title: 'Coucher de soleil sur la mer',
    description: 'Un magnifique coucher de soleil capturé sur la côte méditerranéenne',
    imageUrl: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    category: 'Nature',
    dateCreated: '2023-06-15',
    featured: true
  },
  {
    id: '2',
    title: 'Portrait dans la forêt',
    description: 'Portrait naturel avec un éclairage tamisé dans une forêt dense',
    imageUrl: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
    category: 'Portraits',
    dateCreated: '2023-07-22'
  },
  {
    id: '3',
    title: 'Cérémonie de mariage',
    description: 'Un moment émouvant lors d\'une cérémonie de mariage en plein air',
    imageUrl: 'https://i.imgur.com/uZwQEal.jpeg',
    category: 'Mariages',
    dateCreated: '2023-08-05',
    featured: true
  },
  {
    id: '4',
    title: 'Montagnes brumeuses',
    description: 'Paysage montagneux avec brume matinale et premiers rayons du soleil',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    category: 'Nature',
    dateCreated: '2023-09-12'
  },
  {
    id: '5',
    title: 'Portrait urbain',
    description: 'Portrait dans un environnement urbain avec des contrastes forts',
    imageUrl: 'https://i.imgur.com/awC2cfy.jpeg',
    category: 'Portraits',
    dateCreated: '2023-10-03'
  },
  {
    id: '6',
    title: 'Faune sauvage',
    description: 'Cerf majestueux photographié dans son habitat naturel au lever du soleil',
    imageUrl: 'https://i.imgur.com/w8J9oPx.jpeg',
    category: 'Nature',
    dateCreated: '2023-11-20',
    featured: true
  },
  {
    id: '7',
    title: 'Danse des mariés',
    description: 'Premier slow des mariés capturé dans une ambiance féérique',
    imageUrl: 'https://i.imgur.com/SsEMOEL.jpeg',
    category: 'Mariages',
    dateCreated: '2023-12-09'
  },
  {
    id: '8',
    title: 'Conférence annuelle',
    description: 'Moments clés de la conférence annuelle de l\'entreprise XYZ',
    imageUrl: 'https://i.imgur.com/RRFv7ct.jpeg',
    category: 'Événements',
    dateCreated: '2024-01-18'
  },
  {
    id: '9',
    title: 'Art conceptuel',
    description: 'Composition artistique jouant avec les formes et les textures',
    imageUrl: 'https://i.imgur.com/LRL6TfV.jpeg',
    category: 'Art',
    dateCreated: '2024-02-27',
    featured: true
  }
];

// Galeries
export const galleries: GalleryData[] = [
  {
    id: 'g1',
    title: 'Mariages',
    description: 'Capturer les moments d\'émotion et d\'amour lors de votre journée spéciale',
    coverImage: 'https://i.imgur.com/SsEMOEL.jpeg',
    category: 'Mariages',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g2',
    title: 'Portraits',
    description: 'Des portraits authentiques qui révèlent la personnalité unique de chacun',
    coverImage: 'https://i.imgur.com/SAyPhfP.jpeg',
    category: 'Portraits',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Portraits')
  },
  {
    id: 'g3',
    title: 'Nature',
    description: 'La beauté majestueuse de la nature capturée dans tous ses états',
    coverImage: 'https://i.imgur.com/8SzfkZB.jpeg',
    category: 'Nature',
    photos: photos.filter(photo => photo.category === 'Nature')
  },
  {
    id: 'g4',
    title: 'Événements',
    description: 'Des événements professionnels ou festifs immortalisés avec soin',
    coverImage: 'https://i.imgur.com/bZYDEGY.jpeg',
    category: 'Événements',
    photos: photos.filter(photo => photo.category === 'Événements')
  },
  {
    id: 'g5',
    title: 'Art',
    description: 'Compositions artistiques et créatives mettant en avant mon style unique',
    coverImage: 'https://i.imgur.com/ECQ0HOG.jpeg',
    category: 'Art',
    photos: photos.filter(photo => photo.category === 'Art')
  },
  {
    id: 'g6',
    title: 'Mariages',
    description: 'Capturer les moments d\'émotion et d\'amour lors de votre journée spéciale',
    coverImage: 'https://i.imgur.com/fvPs0pF.jpeg',
    category: 'Mariages',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g7',
    title: 'Mariages',
    description: 'Capturer les moments d\'émotion et d\'amour lors de votre journée spéciale',
    coverImage: 'https://i.imgur.com/1nDVzLu.jpeg',
    category: 'Mariages',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g8',
    title: 'Mariages',
    description: 'Capturer les moments d\'émotion et d\'amour lors de votre journée spéciale',
    coverImage: 'https://i.imgur.com/Xi3g5lH.jpeg',
    category: 'Mariages',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g9',
    title: 'Mariages',
    description: 'Capturer les moments d\'émotion et d\'amour lors de votre journée spéciale',
    coverImage: 'https://i.imgur.com/ecfweYY.jpeg',
    category: 'Mariages',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g10',
    title: 'Mariages',
    description: 'Capturer les moments d\'émotion et d\'amour lors de votre journée spéciale',
    coverImage: 'https://i.imgur.com/wsP5uPr.jpeg',
    category: 'Mariages',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g11',
    title: 'Art',
    description: 'Compositions artistiques et créatives mettant en avant mon style unique',
    coverImage: 'https://i.imgur.com/LRL6TfV.jpeg',
    category: 'Art',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g12',
    title: 'Portraits',
    description: 'Des portraits authentiques qui révèlent la personnalité unique de chacun',
    coverImage: 'https://i.imgur.com/w8J9oPx.jpeg',
    category: 'Portraits',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g13',
    title: 'Événements',
    description: 'Des événements professionnels ou festifs immortalisés avec soin',
    coverImage: 'https://i.imgur.com/FTNpbLr.jpeg',
    category: 'Événements',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g14',
    title: 'Événements',
    description: 'Des événements professionnels ou festifs immortalisés avec soin',
    coverImage: 'https://i.imgur.com/w8J9oPx.jpeg',
    category: 'Événements',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g15',
    title: 'Événements',
    description: 'Des événements professionnels ou festifs immortalisés avec soin',
    coverImage: 'https://i.imgur.com/yrdnSup.jpeg',
    category: 'Événements',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g16',
    title: 'Portraits',
    description: 'Des portraits authentiques qui révèlent la personnalité unique de chacun',
    coverImage: 'https://i.imgur.com/884g362.jpeg',
    category: 'Portraits',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g17',
    title: 'Événements',
    description: 'Des événements professionnels ou festifs immortalisés avec soin',
    coverImage: 'https://i.imgur.com/BBsPfmp.jpeg',
    category: 'Événements',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g18',
    title: 'Événements',
    description: 'Des événements professionnels ou festifs immortalisés avec soin',
    coverImage: 'https://i.imgur.com/DVnhfLA.jpeg',
    category: 'Événements',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g19',
    title: 'Portraits',
    description: 'Des portraits authentiques qui révèlent la personnalité unique de chacun',
    coverImage: 'https://i.imgur.com/9DGYxKz.jpeg',
    category: 'Portraits',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g20',
    title: 'Portraits',
    description: 'Des portraits authentiques qui révèlent la personnalité unique de chacun',
    coverImage: 'https://i.imgur.com/vWpWrut.jpeg',
    category: 'Portraits',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g21',
    title: 'Portraits',
    description: 'Des portraits authentiques qui révèlent la personnalité unique de chacun',
    coverImage: 'https://i.imgur.com/PX8GcWx.jpeg',
    category: 'Portraits',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g22',
    title: 'Événements',
    description: 'Des événements professionnels ou festifs immortalisés avec soin',
    coverImage: 'https://i.imgur.com/NuxrHek.jpeg',
    category: 'Événements',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
];

export const getPhotosByCategory = (category: PhotoCategory): Photo[] => {
  if (category === 'Tous') {
    return photos;
  }
  return photos.filter(photo => photo.category === category);
};

export const getGalleryById = (galleryId: string): GalleryData | undefined => {
  return galleries.find(gallery => gallery.id === galleryId);
};

export const getFeaturedPhotos = (): Photo[] => {
  return photos.filter(photo => photo.featured);
};

export const searchPhotos = (query: string): Photo[] => {
  const lowercaseQuery = query.toLowerCase();
  return photos.filter(
    photo => 
      photo.title.toLowerCase().includes(lowercaseQuery) ||
      photo.description.toLowerCase().includes(lowercaseQuery) ||
      photo.category.toLowerCase().includes(lowercaseQuery)
  );
};
