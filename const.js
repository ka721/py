let list = [
    {
        name:"Сумма 3-х чисел",
        code:`summa = sum([int(input(1)), int(input("Введите 1: ")), int(input())])
print(summa)`
    },
    {
        name:"Сумма 2-х чисел",
        code:`summa = sum([int(input()), int(input())])
print(summa)`
    },
    {
        name:"Печать строки N раз",
        code:`n=5
string="Hello World "
print(string * n)`
    },
    {
        name:"Объединение двух словарей",
        code:`def merge(dic1,dic2):
    dic3=dic1.copy()
    dic3.update(dic2)
    return dic3
dic1={1:"hello", 2:"world"}
dic2={3:"Python", 4:"Programming"}
print(merge(dic1,dic2))`
    },
    {
        name:"Проверка дубликатов",
        code:`def check_duplicate(lst):
    return len(lst) != len(set(lst))
print("Пример 1: " + str(check_duplicate([1,2,3,4,5,4,6])))
print("Пример 2: " + str(check_duplicate([1,2,3,4,5,6])))`
    },
    {
        name:"Сортировка списков",
        code:`my_list1 = ["leaf", "cherry", "fish"]
my_list2 = ["D","C","B","A"]
my_list3 = [1,2,3,4,5]

my_list1.sort()
print("Пример 1: " + str(my_list1))
my_list2.sort()
print("Пример 2: " + str(my_list2))
print("Пример 3: " + str(sorted(my_list3, reverse=True)))`
    },
    {
        name:"Сортировка словаря",
        code:`orders = { 'pizza': 200, 'burger': 56, 'pepsi': 25, 'Coffee': 14 }

sorted_dic1 = sorted(orders.items(), key=lambda x: x[0])
print("Сортировка по ключу: " + str(sorted_dic1))

sorted_dic2 = sorted(orders.items(), key=lambda x: x[1])
print("Сортировка по значению: " + str(sorted_dic2))`
    }
]
