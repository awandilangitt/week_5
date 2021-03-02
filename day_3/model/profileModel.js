class ProfileModel {
  getAllProfile () {
      return [
          {
              id : 1,
              name : "Kurniawan Agni",
              jk : "pria"
          },
          {
              id : 2,
              name : "Andrea Sentana",
              jk : "pria"
          },
          {
              id : 3,
              name : "Eka Dyah Cahyani",
              jk : "wanita"
          },
          {
              id : 4,
              name : "Jono bin mahmud",
              jk : "pria"
          }
      ];
  }
      getAllProfile () {
        return this.#dataProfile;
      }

  getFindProfile(number) {
    return this.#dataprofile[number];
  }
}
  

module.exports = Object.freeze (new ProfileModel());