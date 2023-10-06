import { faker } from '@faker-js/faker';

const staffList = Array.from({ length: 6 }, (_, index) => ({
  key: index,
  avatar: faker.image.avatarLegacy(),
  position: '⭐' + 5 + '   ' + faker.person.jobTitle(),
  name: faker.person.fullName(),
  desc: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
}));

export default staffList;
