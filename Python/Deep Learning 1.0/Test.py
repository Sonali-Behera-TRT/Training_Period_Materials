# # # # # # # # # if 5 > 2:
# # # # # # # # #   print('Okay')

# # # # # # # # # """
# # # # # # # # # Hello World
# # # # # # # # # I am Sonali
# # # # # # # # # """

# # # # # # # # # x = '5'
# # # # # # # # # print(x, type(x))
# # # # # # # # # x = int(x)
# # # # # # # # # print(x, type(x))

# # # # # # # # # x = float(x)
# # # # # # # # # print(x, type(x))

# # # # # # # # # x = "awesome"

# # # # # # # # # def myfunc():
# # # # # # # # #   global x
# # # # # # # # #   x = "fantastic"

# # # # # # # # # myfunc()

# # # # # # # # # print("Python is " + x)


# # # # # # # # # x = 10e5
# # # # # # # # # y = 45E5
# # # # # # # # # print(complex(x), complex(y))

# # # # # # # # # import random

# # # # # # # # # a = random.randrange(1, 10)
# # # # # # # # # print(a)

# # # # # # # # # str = 'String'
# # # # # # # # # print(len(str))
# # # # # # # # # print('ring' in str)
# # # # # # # # # print('moon' not in str)

# # # # # # # # # # for ch in str: 
# # # # # # # # # #   print(ch)

# # # # # # # # # print(str[-5:-2])

# # # # # # # # # str = '  Hello! I am a string  '
# # # # # # # # # # print(str.lower())

# # # # # # # # # # print(str.upper())

# # # # # # # # # # print(str.strip())

# # # # # # # # # #print(str.replace('I am', 'You are'))
# # # # # # # # # print(str.split())

# # # # # # # # # print(str)

# # # # # # # # name = 'Sonali'
# # # # # # # # age = 21
# # # # # # # # str = 'Hello My name is {1} and age is {0}'
# # # # # # # # print(str.format(name, age))
# # # # # # # # print(str)

# # # # # # # # print(bool('sonali'))


# # # # # # # # print(2 ** 5)
# # # # # # # # print(8.4 / 2)
# # # # # # # # print(8.4 // 2)

# # # # # # # # print(5 / 2)
# # # # # # # # print(5 // 2.0)
# # # # # # # # print(5 == 5.0)

# # # # # # # # print(not True)

# # # # # # # x = [1, 2, 3]
# # # # # # # y = [1, 2, 3]
# # # # # # # z = x
# # # # # # # print(x is not y)
# # # # # # # print(x is z)
# # # # # # # print(x == z)

# # # # # # # print(2 in x)
# # # # # # # print(5 not in x)

# # # # # # print(~True)
# # # # # # print(True and False)

# # # # # myList = ['apple', 'mango', 'orange', 'kiwi', 'guava', 'watermelon', 'dragonfruit', 'banana', 'coconut', 'lemon']
# # # # # # print(len(myList))
# # # # # # print(myList[-7:-2])

# # # # # # print(myList)
# # # # # # myList[2:4] = ['Sonali', 'Monali', 'Hardik']
# # # # # # print(myList)

# # # # # # myList.insert(11, 'Sonali')
# # # # # # print(myList)
# # # # # # print(len(myList))

# # # # # # myList.append('Pratikhya')
# # # # # # print(myList)

# # # # # # myList2 = ('Sauvagini', 'Sonail', 'Monali')
# # # # # # myList.extend(myList2)

# # # # # # print(myList)

# # # # # print(len(myList))

# # # # # # myList.remove('kiwi')
# # # # # # print(len(myList))

# # # # # # myList.clear()
# # # # # # print(myList)

# # # # # # myList.pop(0)
# # # # # # print(len(myList))

# # # # # # del myList[4]
# # # # # # print(len(myList))

# # # # # # del myList
# # # # # # print(myList)

# # # # # # for item in myList:
# # # # # #   print(item)

# # # # # # for i in range(len(myList)):
# # # # # #     print(myList[i])

# # # # # # i = 0
# # # # # # while i < len(myList):
# # # # # #     print(myList[i])
# # # # # #     i += 1

# # # # # # [print(item) for item in myList]

# # # # # # print(range(5))

# # # # # list2 = range(5)
# # # # # [print(x) for x in list2]

# # # # # fruits = ["orange", "mango", "kiwi", "pineapple", "banana"]
# # # # # # newlist = [x if(x != 'banana') else 'orange' for x in fruits]

# # # # # fruits.sort(reverse = True)
# # # # # print(fruits)

# # # # # thislist = [100, 50, 65, 82, 23]
# # # # # thislist.sort(reverse = True)
# # # # # print(thislist)

# # # # def mySort(x):
# # # #     return abs(100 - x)

# # # # # thislist = ["banana", "Orange", "Kiwi", "cherry"]
# # # # # thislist = [x.lower() for x in thislist]
# # # # # thislist.sort()
# # # # # print(thislist)

# # # # # thislist = [100, 50, 65, 82, 23]
# # # # # # thislist.sort(key = mySort)
# # # # # # print(thislist)

# # # # # copyList = list(thislist)
# # # # # copyList[1] = 200

# # # # # print(thislist)
# # # # # print(copyList)

# # # # myList = ['apple', 'apple', 'mango', 'apple', 'banana']
# # # # # print(myList.count('apple'))
# # # # # print(myList.index('banana'))

# # # # myList.reverse()
# # # # print(myList)

# # # # thistuple = ("apple", "banana", "cherry")
# # # # print(thistuple)

# # # # thislist = list(thistuple)
# # # # thislist.append('orange')

# # # # thistuple = tuple(thislist)
# # # # print(thistuple)

# # # # tuple2 = ('orange',)
# # # # thistuple += tuple2
# # # # print(thistuple)

# # # # thislist = list(thistuple)
# # # # thislist.remove('apple')
# # # # thistuple = tuple(thislist)

# # # # del thistuple
# # # # print(thistuple)

# # # thistuple = ("apple", "banana", 'sonali', 'moanli', "cherry")
# # # # print(thistuple)

# # # # (item1, *item2, item3) = thistuple
# # # # print(item1)
# # # # print(item2)
# # # # print(item3)

# # # # for item in thistuple:
# # # #     print(item)

# # # # for x in range(len(thistuple)):
# # # #   print(thistuple[x])

# # # # i = 0
# # # # while(i < len(thistuple)):
# # # #   print(thistuple[i])
# # # #   i += 1

# # # # [print(x) for x in thistuple]

# # # # thistuple = thistuple * 3
# # # # print(thistuple)

# # # # print(thistuple.index('banana'))


# # # thisSet = {'apple', 'banana', 'cherry'}
# # # print(type(thisSet))

# # # # newSet = set(('apple', 'banana', 'grapes'))
# # # # print(newSet)

# # # # print(len(thisSet))
# # # # for x in newSet:
# # # #     print(x)
# # # # print('grapes' in newSet)

# # # # newSet = {'grapes', 'potato', 'onion'}
# # # # thisSet.add('orange')
# # # # print(thisSet)

# # # # thisSet.update({'grapes', 'onion', 'potato'}, {'brinjal', 'cauliflower'})
# # # # print(thisSet)

# # # print(thisSet)
# # # thisSet.discard('banana')
# # # thisSet.clear()
# # # del thisSet
# # # print(thisSet)

# # set1 = {'apple', 'banana', 'orange', True, False}
# # set2 = {'orange', 1, 0}

# # print(set2.issubset(set1))

# # # print(set1.difference(set2))
# # # print(set1.symmetric_difference(set2))

# # # print(set1.intersection(set2))
# # # print(set1.symmetric_difference(set2))

# # # set1.update(set2)

# # # set1.intersection_update(set2)
# # # print(set1)

# # # set1.symmetric_difference_update(set2)
# # # print(set1)

# # thisDict = {
# #   'name': 'Sonali',
# #   'age': 21,
# #   'gender': 'Female'  
# # }

# # print(thisDict['age'])
# # print(len(thisDict))

# # newDict = dict(
# #   name = 'Sonali',
# #   age = 21,
# #   gender = 'Female' 
# # )

# # print(newDict)
# # print(type(newDict))

# # print(thisDict.items())

# # print('name' in thisDict)
# # print('names' not in thisDict)

# # # print(thisDict)
# # thisDict['age'] = 25
# # thisDict.update({'name': 'Monali', 'age': 22})
# # # print(thisDict)

# # thisDict['title'] = 'Behera'
# # thisDict.update({'color': 'red'})
# # print(thisDict)

# # thisDict.pop('title')
# # print(thisDict)

# # thisDict.popitem()
# # print(thisDict)

# # del thisDict['name']
# # print(thisDict)

# # thisDict.clear()
# # print(thisDict)

# # del thisDict
# # print(thisDict)

# # thisDict = {
# #   'fname': 'Sonali',
# #   'lname': 'Behera',
# #   'age': 21,
# #   'gender': 'Female'  
# # }

# # for x in thisDict:
# #     print(x, thisDict[x])

# # for x in thisDict.values():
# #     print(x)

# # for x in thisDict.keys():
# #     print(x)

# # for (x, y) in thisDict.items():
# #     print(x, y)

# child1 = {
#   'fname': 'Sonali',
#   'lname': 'Behera'
# }

# child2 = {
#   'fname': 'Monali', 
#   'lname': 'Behera'
# }

# child3 = {
#   'fname': 'Hardik',
#   'mname': 'Dibyanshu',
#   'lname': 'Behera'
# }

# parentDict = {
#     'child1': child1,
#     'child2': child2,
#     'child3': child3
# }

# # print(parentDict['child2']['fname'])

# # x = ('name', 'age', 'gender')
# # y = 'sonali'

# # print(dict.fromkeys(x))

# print(parentDict.setdefault('random'))
# print(parentDict)

# a = 1000
# b = 10001

# if a > b:
#     print('a is greater than b')
# elif a < b:
#     print('a is less than b')
# else:
#     print('a is equal to b')

# print('a > b') if a > b else print('a < b') if a < b else print('a = b')

# if(a > b):
#     pass
# else: pass
# print('out')

# for x in range(1, 6, 2):
#     print(x)

# def my_function():
#     print('Welcome to my function')

# my_function()

# def say_hi(fname, lname):
#     print('Hi', fname, lname)

# say_hi('Sonali', 'Behera')

# def favourite_fruits(*fruits):
#     [print(x) for x in fruits]

# favourite_fruits('apple', 'banana', 'grapes', 1, True)

# say_hi(lname='Behera', fname='Hardik Dibyanshu')

# def print_person(**person):
#     [print(x, y) for x, y in person.items()]

# print_person(name='Sonali Behera', age=21, gender='female')

# def default_function(val = 'no default para'):
#   return val

# print(default_function('apple'))
# print(default_function('mango'))
# print(default_function())

# def factorial(n):
#     if(n == 0):
#         return 1
#     return n * factorial(n - 1)

# print(factorial(5))

# myFunction = lambda : print('Welcome to myFunction')
# myFunction()

# def myFunction():
#   return lambda name: print('Hey ' + name + '! Welcome to my function')

# sonali = myFunction()
# sonali('sonali')

# sayHi = lambda fname, lname: print('Hi', fname, lname)
# sayHi('SOnali', 'Behera')

# multiplier = lambda a: a * 2
# print(multiplier(8))

# a = 10
# b = 12

# print(f'a = {a} and b = {b}')

# class Person: 
#     def __init__(self, name, age, gender):
#         self.name = name
#         self.age = age
#         self.gender = gender

#     def printName(self):
#         print(self.name)
#         return
    
#     def __str__(self):
#         return f'{self.name}({self.age}, {self.gender})'

# person1 = Person('Sonali', 21, 'Female')
# person2 = Person('Monali', 18, 'Female')
# person3 = Person('Hardik', 10, 'Male')

# print(person1)
# print(person2)
# print(person3)

# person1.printName()

# del person2.name
# person2.printName()

# del person3
# print(person3)

# class Student(Person):
#     def __init__(self, name, age, gender):
#         super().__init__(name, age, gender)

#     def showName(self):
#         super().printName()

# student = Student('Sonali', 12, 'F')
# student.printName()
# student.showName()

# class MyClass: 
#     def __iter__(self):
#         self.x = 1
#         return self
        
#     def __next__(self):
#         if (self.x > 20):
#             raise StopIteration
#         x = self.x
#         self.x += 1
#         return x
    
# myClass = MyClass()
# myIter = iter(myClass)

# for x in myIter:
#     print(x)

# s = 'sonali'

# myIter = iter(s)
# print(next(myIter))
# print(next(myIter))
# print(next(myIter))
# print(next(myIter))
# print(next(myIter))
# print(next(myIter))

# from platform import system
# import random as rand

# print(system())
# print(dir(rand))

# import json

# # x = json.dumps(('apple', 'banana', 'mango'))

# # x = json.dumps({"name": "John",
# #   "age": 30,
# #   "city": "New York"})

# # print(json.dumps({"name": "John", "age": 30}))
# # print(json.dumps(["apple", "bananas"]))
# # print(json.dumps(("apple", "bananas")))
# # print(json.dumps("hello"))
# # print(json.dumps(42))
# # print(json.dumps(31.76))
# # print(json.dumps(True))
# # print(json.dumps(False))
# # print(json.dumps(None))

# # print()
# # print()

# # x = json.loads('{"name": "John", "age": 30}')
# # y = json.loads('{"apple": "bananas"}')
# # print(type(x))
# # print(type(y))

# x = {
#   "name": "John",
#   "age": 30,
#   "married": True,
#   "divorced": False,
#   "children": ("Ann","Billy"),
#   "pets": None,
#   "cars": [
#     {"model": "BMW 230", "mpg": 27.5},
#     {"model": "Ford Edge", "mpg": 24.1}
#   ]
# }

# print(json.dumps(x, indent=2, sort_keys=True, separators=(" , ", " : ")))

# import re

# txt = 'sonali is a good girl. Sonali sonali monali bad bad  hardik sonali sOnali '
# print(re.findall('sonali', txt))

# print(re.match('.*good.*', txt))
# print(re.sub('good', 'bad', txt))

# import camelcase

# c = camelcase.CamelCase('no')

# txt = 'oKay! no isSue'
# print(c.hump(txt))

# try:
#   x = 10
#   print(x)
# except NameError:
#   print('NameError occured')
# except:
#   print('Unknown error occured')
# else:
#   print('No error occured')
# finally:
#   print('exiting try-catch error handling')

# raise FileNotFoundError('File Not Found Yarrrrrr!!!!')

# x = 100

# if (type(x) is int):
#     raise TypeError('Got an integer broo!!')

# num = input('Enter a number: ')
# print(f'Entered number is {num}')

# f = open('C:MyModule.py', 'r')

# for x in f:
#     print(x)

# import os

# if os.path.exists('MyModule.py'):
#     os.remove('MyModule.py')
#     print('Deleted')

# import numpy as np

# arr = np.array([1.1, 2.2, 3.3, 4.4, 5.5], dtype='int8')
# print(arr)
# print(arr.dtype)

# newArray = arr.astype('i2')
# print(newArray)
# print(newArray.dtype)
# print(type(newArray))

# baseArr = np.array([1, 2, 3, 4, 5])
# copyArr = baseArr.copy()
# viewArr = baseArr.view()

# print(copyArr)
# print(viewArr)

# print(copyArr.base)
# print(viewArr.base)

# arr = np.array([[1, 2,3], [4, 5, 6]])
# print(arr.shape)
# print(arr.reshape(3, -1))
# print(arr.shape)
# for x in np.nditer(arr[:, ::2], op_dtypes='S', flags=['buffered']):
#   print(x)

# for idx, x in np.ndenumerate(arr):
#   print(idx, x)

# arr1 = np.array([1, 2, 3, 4, 5])
# arr2 = np.array([6, 7, 8, 9, 10])

# arr1 = np.array([[1, 2], [3, 4], [5, 6]])
# arr2 = np.array([[7, 8], [9, 10], [11, 12]])

# arr1 = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
# arr2 = np.array([[[9, 10], [11, 12]], [[13, 14], [15, 16]]])

# print(np.hstack((arr1, arr2)))
# print(np.vstack((arr1, arr2)))
# print(np.dstack((arr1, arr2)))

# print(np.concatenate((arr1, arr2)))
# print(np.concatenate((arr1, arr2), axis = 1))
# print(np.concatenate((arr1, arr2), axis = 2))

# print(np.stack((arr1, arr2), axis = 0))
# print(np.stack((arr1, arr2), axis = 1))
# print(np.stack((arr1, arr2), axis = 2))

# print(np.ndenumerate(arr))

# arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
# arr = np.array([
#     [
#       [1, 2], [3, 4], [5, 6], [7, 8], [9, 10]
#     ], 
#     [
#       [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]
#     ]
#   ])

# print(np.array_split(arr, 5, axis = 0))
# print(np.hsplit(arr, 5))
# print(np.vsplit(arr, 2))
# print(np.dsplit(arr, 2))
# print(np.split(arr, 6))

# arr = np.array([1,3,2, 5, 4 ,6, 7])
# print(np.sort(arr))
# print(arr)
# arr.sort()
# print(arr)
# print(np.where(arr%2 == 0))

# print(np.searchsorted(arr, 3))

# arr = np.array(['kiwi', 'potato', 'apple', 'mango', 'dragonfruit'])
# print(np.sort(arr))

# arr = np.array([1, 2, 3, 4, 5, 6, 7])
# # filter_array = [True, False, True, False, True, False, False]
# # filter_array = arr % 2 != 0
# filter_array = []
# for item in arr:
#   filter_array.append(True) if(item % 2 != 0) else filter_array.append(False)

# newArray = arr[filter_array]
# print(newArray)

# from numpy import random


# print(random.randint(100, size=(5, 3)))
# print(random.rand(5, 5))

# print(random.choice([1, 32, 4, 2, 5], size=(3, 2)))
# print(random.randint())

# print(random.choice([1, 3, 5, 7], p=[0.1, 0.1, 0.5, 0.3], size=(5, 3)))

# random.shuffle(arr)
# print(arr)

# random.shuffle(arr)
# print(arr)

# random.shuffle(arr)
# print(arr)

# random.shuffle(arr)
# print(arr)

# print(random.permutation(arr))
# print(random.permutation(arr))
# print(random.permutation(arr))
# print(random.permutation(arr))
# print(random.permutation(arr))

# print(arr)

import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from numpy import random

# arr = np.array([[1,2,3], [4,4, 6]])
# sns.displot(arr)
# plt.show()

# sns.histplot(arr)
# plt.show()

# sns.distplot(arr, hist=False)
# plt.show()

# arr = random.normal(loc=1, scale=3, size=(1000))
# print(arr)

# sns.distplot(arr, hist=False)

sns.distplot(random.binomial(n = 100, p = 0.5, size= 1000), label='binomial', hist=False)
sns.distplot(random.normal(loc=50, scale=5, size=1000), label='normal', hist=False)
plt.show()