
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
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
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
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    category: 'Portraits',
    dateCreated: '2023-10-03'
  },
  {
    id: '6',
    title: 'Faune sauvage',
    description: 'Cerf majestueux photographié dans son habitat naturel au lever du soleil',
    imageUrl: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170',
    category: 'Nature',
    dateCreated: '2023-11-20',
    featured: true
  },
  {
    id: '7',
    title: 'Danse des mariés',
    description: 'Premier slow des mariés capturé dans une ambiance féérique',
    imageUrl: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed',
    category: 'Mariages',
    dateCreated: '2023-12-09'
  },
  {
    id: '8',
    title: 'Conférence annuelle',
    description: 'Moments clés de la conférence annuelle de l\'entreprise XYZ',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    category: 'Événements',
    dateCreated: '2024-01-18'
  },
  {
    id: '9',
    title: 'Art conceptuel',
    description: 'Composition artistique jouant avec les formes et les textures',
    imageUrl: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4',
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
    coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    category: 'Mariages',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Mariages')
  },
  {
    id: 'g2',
    title: 'Portraits',
    description: 'Des portraits authentiques qui révèlent la personnalité unique de chacun',
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    category: 'Portraits',
    featured: true,
    photos: photos.filter(photo => photo.category === 'Portraits')
  },
  {
    id: 'g3',
    title: 'Nature',
    description: 'La beauté majestueuse de la nature capturée dans tous ses états',
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    category: 'Nature',
    photos: photos.filter(photo => photo.category === 'Nature')
  },
  {
    id: 'g4',
    title: 'Événements',
    description: 'Des événements professionnels ou festifs immortalisés avec soin',
    coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    category: 'Événements',
    photos: photos.filter(photo => photo.category === 'Événements')
  },
  {
    id: 'g5',
    title: 'Art',
    description: 'Compositions artistiques et créatives mettant en avant mon style unique',
    coverImage: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4',
    category: 'Art',
    photos: photos.filter(photo => photo.category === 'Art')
  }
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
