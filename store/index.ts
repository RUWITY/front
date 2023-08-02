import { atom } from 'recoil';

export const userProfileState = atom<any>({
  key: 'userProfile',
  default: {
    nickname: '',
    explanation: '',
    todayLink: '',
  },
});

export const imgFileState = atom<any>({
  key: 'imgFile',
  default:
    'https://i.pinimg.com/550x/f3/c9/6c/f3c96c43766c04eaa1b773eb38ef531e.jpg',
});

export const tabListState = atom<any>({
  key: 'tabList',
  default: [],
});
