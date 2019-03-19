def linear_search(list, target):
  """
  returns the idex position of the target if 
  found
  """
  for i in range(0, len(list)):
    if list[i] == target:
      return i
  return None


def verify(index):
  if index is not None:
    print("Target found at index: ", index)
  else:
    print("Target not found")
    
 







number = [1,2,4,5,6,67,7,78]

result = linear_search(number, 6)
verify(result)