require 'minitest/autorun'
require 'minitest/rg'
# require_relative '../testing_task_1.rb'
require_relative '../testing_task_2.rb'
require_relative '../card.rb'

class TestCardGame < Minitest::Test

  def setup
    @card1 = Card.new("spades", 1)
    @card2 = Card.new("hearts", 10)
    @cards = [@card1, @card2]
  end

  def test_ace
    assert(CardGame.checkforAce(@card1))
    assert_equal(false, CardGame.checkforAce(@card2))
  end

  def test_highest
    assert_equal(
      "hearts", CardGame.highest_card(@card1, @card2)
    )
  end

  def test_total
    assert_equal(
      "You have a total of 11", CardGame.cards_total(@cards)
    )
  end

end
