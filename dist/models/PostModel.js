"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (sequelize, Datatypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        content: {
            type: Datatypes.TEXT,
            allowNull: false
        },
        photo: {
            type: Datatypes.BLOB({
                length: 'long'
            }),
            allowNull: false
        }
    }, {
        tableName: 'posts'
    });
    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'author',
                name: 'author'
            }
        });
    };
    return Post;
};
