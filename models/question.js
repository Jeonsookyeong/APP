class Question {
  constructor(id, category, ownerId, location, description, createdAt) {
    this.id = id;
    this.category = category;
    this.ownerId = ownerId;
    this.location = location;
    this.description = description;
    this.createdAt = createdAt;
  }
}

export default Question;
