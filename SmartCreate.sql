DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    User_ID     integer     PRIMARY KEY,
    FirstName   text        NOT NULL,
    LastName    text,
    Email       text,
    Password    text,
    Gender      text,
    Birthdate   date
);

ALTER TABLE Users OWNER TO cobbje;

COMMENT ON TABLE Users IS '';


DROP TABLE IF EXISTS Responses;

CREATE TABLE Responses (
    Response_ID integer     PRIMARY KEY,
    Question_ID integer     NOT NULL,
    User_ID     integer       NOT NULL,
    Content     text
);

ALTER TABLE Responses OWNER TO cobbje;

COMMENT ON TABLE Responses IS '';

DROP TABLE IF EXISTS Polls;

CREATE TABLE Polls(
    Poll_ID         integer     PRIMARY KEY,
    Owner_ID        integer     NOT NULL,
    PollName        text,
    PollDescription text,
    PollOrder       integer,
    SessionCode     text,
    CreateDate      date,
    StartDate       date,
    EndDate         date
);

ALTER TABLE Polls OWNER TO cobbje;

COMMENT ON TABLE Polls IS '';


DROP TABLE IF EXISTS Questions;

CREATE TABLE Questions(
    Question_ID     integer PRIMARY KEY,
    Poll_ID         integer,
    Stem            text,
    AnswerType      text,
    QuestionsOrder  integer
);

ALTER TABLE Questions OWNER TO cobbje;

COMMENT ON TABLE Questions IS '';

DROP TABLE IF EXISTS Choices;

CREATE TABLE Choices(
    Choice_ID       integer     PRIMARY KEY,
    Question_ID     integer     NOT NULL,
    ChoiceOrder     integer,
    IsCorrectChoice text,
    Content         text
);

ALTER TABLE Choices OWNER TO cobbje;

COMMENT ON TABLE Choices IS '';