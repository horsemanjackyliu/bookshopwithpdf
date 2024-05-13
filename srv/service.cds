using { com.sap as my } from '../db/schema.cds';

@path : '/service/admin'
service admin
{
    annotate Books
    {
        createdAt
            @cds.on.insert : $now;
        createdBy
            @cds.on.insert : $user;
    }

    @odata.draft.enabled
    entity Books as projection on my.Books
    {
        ID,
        createdAt,
        createdBy,
        modifiedAt,
        modifiedBy,
        title,
        descr,
        stock,
        price,
        image,
        currency
    };

    @odata.draft.enabled
    entity Authors as projection on my.Authors
    {
        ID,
        createdAt,
        createdBy,
        modifiedAt,
        modifiedBy,
        name,
        dateOfBirth,
        dateOfDeath,
        placeOfBirth,
        placeOfDeath
    };
}

annotate admin with @requires :
[
    'authenticated-user'
];
