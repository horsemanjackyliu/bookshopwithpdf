namespace com.sap;

using
{
    Language,
    Currency,
    Country,
    sap.common.Locale,
    sap.common.Languages,
    sap.common.Currencies,
    cuid,
    managed,
    temporal,
    User,
    extensible
}
from '@sap/cds/common';

annotate Authors
{
    createdAt
        @cds.on.insert : $now;
    createdBy
        @cds.on.insert : $user;
    modifiedAt
        @cds.on.update : $now;
    modifiedBy
        @cds.on.update : $user;
}

annotate Books
{
    createdAt
        @cds.on.insert : $now;
    createdBy
        @cds.on.insert : $user;
    modifiedAt
        @cds.on.update : $now;
    modifiedBy
        @cds.on.update : $user;
}

entity Books : managed
{
    key ID : UUID
        @Core.Computed;
    title : localized String(100) not null;
    descr : localized String(100) not null;
    stock : Integer;
    price : Decimal(10,2);
    currency : Currency;
    image : LargeBinary
        @Core.MediaType : 'application/pdf';
    authors : Association to one Authors;
}

entity Authors : managed
{
    key ID : UUID
        @Core.Computed;
    name : String(100) not null;
    dateOfBirth : Date;
    dateOfDeath : Date;
    placeOfBirth : String(100);
    placeOfDeath : String(100);
    books : Association to many Books on books.authors = $self;
}
