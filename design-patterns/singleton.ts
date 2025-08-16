class DatabaseConnection {
  private static connection: DatabaseConnection;
  private constructor() {}

  static getInstance(): DatabaseConnection {
    if (this.connection) {
      return this.connection;
    }

    return new DatabaseConnection();
  }
}
