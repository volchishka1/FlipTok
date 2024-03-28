export type HomeScreen = {
  isActive: boolean;
  itemData: {
    music: {
      id: string;
      title: string;
      url: string;
    };
    video: {
      id: string;
      title: string;
      cover: string;
      url: string;
    };
  };
};
