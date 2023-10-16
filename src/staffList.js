import { faker } from '@faker-js/faker'

const staffList = Array.from({ length:6 }, (_, index) => ({
  key: index,
  avatar: faker.image.avatarLegacy(),
  name: faker.person.fullName(),
  position: faker.person.jobTitle(),
}));

export default staffList;
