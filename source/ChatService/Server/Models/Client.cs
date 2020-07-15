using System;

namespace ChatService
{
    public class Client : IEquatable<Client>
    {
        public Client(string connectionId)
        {
            ConnectionId = connectionId;
        }

        public Client(string connectionId, string name)
        {
            ConnectionId = connectionId;
            Name = name;
        }

        public string ConnectionId { get; private set; }

        public string Name { get; private set; }

        public bool Equals(Client client)
        {
            return client != null && (ConnectionId == client.ConnectionId || Name == client.Name);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(ConnectionId, Name);
        }
    }
}
