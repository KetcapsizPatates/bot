module.exports = {
  kod: "cool-foto",
  async run(client, message, args) {
    message.channel
      .send(":thinking:  Hemen Atıyorum... :stuck_out_tongue_winking_eye: ")
      .then(message => {
        var espriler = [
          "https://i.picsum.photos/id/539/800/600.jpg?hmac=S1Vk8D0gBm2rFOjhNNZyqqaFiHtW441vq_LNZ9_kZHI",
          "https://i.picsum.photos/id/831/800/600.jpg?hmac=gZEj_JtKQLuiAJ2ANiXQ2RGjoJTurwKDmBj5zM9b7xU",
          "https://i.picsum.photos/id/577/800/600.jpg?hmac=bRQVj4A-R6qcHxZiWD-pwIZd_34wYcxo0o0xq08Sf0A",
          "https://i.picsum.photos/id/966/800/600.jpg?hmac=I7gJF-F5JCNLUJPra3JfBj9ohyLe05LuIxNjmRJ4Od8",
          "https://i.picsum.photos/id/588/800/600.jpg?hmac=lHRcqzz7MQlYo0RjYtzPlwPey7uJkOOzlfGATTzivEA",
          "https://i.picsum.photos/id/681/800/600.jpg?hmac=Py57fuy-OlX4pA7SOEcBzSxvJsiM5mnqSxHbpcjXKqw",
          "https://i.picsum.photos/id/397/800/600.jpg?hmac=1-VX_XQwW_5zj7HM59Xbvp2K747KnIzk3dMfFCzJLFI"
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        message.edit(`${espri}`);
      });
  }
};
