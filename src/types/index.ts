
export type PhotoCategory = 'Mariages' | 'Portraits' | 'Nature' | 'Événements' | 'Art' | 'Tous';

export interface Photo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: PhotoCategory;
  dateCreated: string;
  featured?: boolean;
}

export interface GalleryData {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  category: PhotoCategory;
  photos: Photo[];
  featured?: boolean;
}
