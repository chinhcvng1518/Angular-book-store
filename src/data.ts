import {Book} from './app/shared/models/Book';
import { Tag } from './app/shared/models/Tag';

export const sample_books: Book[] = [
  {
    id:'1',
    name: 'The Four Winds',
    date: '1/1',
    price: 50,
    stars: 4.5,
    imageUrl: 'assets/book-1.jpg',
    tags: ['novel'],
    desc: '"The Four Winds by Kristin Hannah is a captivating, heartbreaking tale of a family who will do anything for each other ― and everything to survive. The strength of Hannah’s prose brings the characters to life in a way that will make you unable to tear yourself away from them. You will celebrate their triumphs, mourn their tragedies, and commend their bravery.',
  },
  {
    id:'2',
    name: 'It Ends with Us',
    price: 60,
    date: '1/2',
    stars: 4.7,
    imageUrl: 'assets/book-2.jpg',
    tags: ['novel', 'fictional', 'romantic'],
    desc:'From the #1 New York Times bestselling author of It Starts with Us and All Your Perfects, a “brave and heartbreaking novel that digs its claws into you and doesn’t let go, long after you’ve finished it” (Anna Todd, New York Times bestselling author) about a workaholic with a too-good-to-be-true romance can’t stop thinking about her first love—soon to be a major motion picture starring Blake Lively and Justin Baldoni.',
  },
  {
    id:'3',
    name: 'Giết con chim nhại',
    price: 5,
    date: '1/3',
    stars: 3.5,
    imageUrl: 'assets/book-3.jpg',
    tags: ['novel'],
    desc:'Giết con chim nhại là một câu chuyện bao gồm nhiều mô-típ, như sự ích kỷ, sự thù hận, lòng dũng cảm, sự kiêu hãnh, định kiến, và các giai đoạn trong cuộc đời',
  },
  {
    id:'4',
    name: 'Eragon',
    price: 2,
    date: '1/4',
    stars: 3.3,
    imageUrl: 'assets/book-4.jpg',
    tags: ['novel', 'fictional','sci-fi'],
    desc:'Now in paperback! Fifteen-year-old Eragon believes that he is merely a poor farm boy--until his destiny as a Dragon Rider is revealed. Gifted with only an ancient sword, a loyal dragon, and sage advice from an old storyteller, Eragon is soon swept into a dangerous tapestry of magic, glory, and power.',
  },
  {
    id:'5',
    name: 'malibu rising',
    price: 11,
    date: '1/5',
    stars: 3.0,
    imageUrl: 'assets/book-5.jpg',
    tags: ['novel', 'fictional'],
    desc:'Malibu Rising is a story about one unforgettable night in the life of a family: the night they each have to choose what they will keep from the people who made them . . . and what they will leave behind.',
  },
  {
    id:'6',
    name: '1984',
    price: 9,
    date: '1/6',
    stars: 4.0,
    imageUrl: 'assets/book-6.jpg',
    tags: ['novel', 'fictional'],
    desc:'1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of the Party, who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. Big Brother controls every aspect of people lives.',
  },
  {
    id:'7',
    name: 'Anxious People',
    price: 12,
    date: '1/7',
    stars: 4.0,
    imageUrl: 'assets/book-7.jpg',
    tags: ['novel', 'fictional', 'humorous'],
    desc:'Anxious People is a character driven novel that uses the plot of a failed bank robbery and hostage situation as the catalyst that brings the various characters together. The novel also continually uses the element of surprise to slowly reveal key facts regarding the secrets and details of the characters and the plot.',
  },
  {
    id:'8',
    name: 'beach read',
    price: 9,
    date: '1/8',
    stars: 4.0,
    imageUrl: 'assets/book-8.jpg',
    tags: ['novel', 'romantic'],
    desc:'A romance writer who no longer believes in love and a literary writer stuck in a rut engage in a summer-long challenge that may just upend everything they believe about happily ever afters. Augustus Everett is an acclaimed author of literary fiction.',
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 8 },
  { name: 'novel', count: 8 },
  { name: 'romantic', count: 2 },
  { name: 'fictional', count: 6 },
  { name: 'humorous', count: 1 },
  { name: 'sci-fi', count: 1 },
]
