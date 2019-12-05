export default {
  createColor() {
    // https://stackoverflow.com/questions/1484506/random-color-generator
    const value = '#' + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6)
    return value
  }
}