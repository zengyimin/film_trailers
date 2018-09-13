/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movielist', {
    id: {
      type: DataTypes.INTEGER(63),
      allowNull: false,
      primaryKey: true
    },
    href: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    img_src: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    trailer_img: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    rate: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    video_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    tableName: 'movielist'
  });
};
