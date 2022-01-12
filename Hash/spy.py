def solution(phone_book):
    phone_book.sort(key=len)
    answer = True
    length = len(phone_book)
    for i in range(length):
        for j in range(i + 1, length):
            if phone_book[j].startswith(phone_book[i]):
                answer = False
                return answer
    return print(answer)
  
solution(["119", "97674223", "1195524421", "121"])
