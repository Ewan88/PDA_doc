### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) # needs to be class method
    if card.value = 1 # not comparing equal to
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # typo and missing comma
  # also needs to be a class method
  if card1.value > card2.value
    return card.name # wrong variable name and method
  else
    card2 # missing return and method call
  end
end
end # one too many

def self.cards_total(cards)
  total # unitialised variable
  for card in cards
    total += card.value
    return "You have a total of" + total # missing space
    # and missing .to_s
    # loop does not finish before returning
  end
end

# missing end for class
```
