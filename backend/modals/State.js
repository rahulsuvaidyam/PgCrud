require('../dbconnection/db');
module.exports = ((sequelize, type) => {
    const State = sequelize.define('state', {
        id: {
            type: type.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING(25),
            require: true,
            unique: {
                args: true,
                msg: 'State Already Exist!',
            }
        },
        is_deleted: {
            type: type.ENUM,
            defaultValue: '1',
            values: ["0", "1", "2"],
            comment: `0: Inactive  1: Active 2 : Delete`,
        },
        created_at: {
            type: type.DATE,
            defaultValue: type.NOW
        },
        updated_at: {
            type: type.DATE,
            defaultValue: type.NOW
        },
        is_deleted_by: {
            type: type.INTEGER(11),
        },
        deleted_at: {
            type: type.DATE,
        },
        created_by: {
            type: type.INTEGER(11)
        },
        updated_by: {
            type: type.INTEGER(11)
        }


    }, { freezeTableName: true, timestamps: false });

    return State;
})(sequelize, Sequelize);