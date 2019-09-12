Feature: Bowling Card
    The app behaves like a Bowling Card

    Scenario: Worst game ever
        Given user has started a game
        When user knocks always '0' pins
        Then the final score is '0'

    Scenario: Always knocks one pine
        Given user has started a game
        When user knocks always '1' pins
        Then the final score is '20'

    Scenario: Always knocks one pine
        Given user has started a game
        When user knocks '10' pins '12' times
        Then the final score is '300'
