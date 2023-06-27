import torch
# import numpy as np

# # # x = torch.rand(3)
# # # y = torch.tensor([2, 3])

# # # y = torch.empty(2, 3)
# # # x = torch.ones(2, 3, dtype=torch.int)
# # # z = torch.zeros(2, 3)
# # # # print(z.dtype)
# # # print(x.dtype)
# # # print(x.size())

# # x = torch.rand(2, 2)
# # y = torch.rand(2, 2)
# # # z = torch.add(x, y)

# # print(x)
# # print(y)
# # # y.add_(x)

# # # p = torch.sub(x, y)
# # p = x - y
# # q = torch.mul(x, y)
# # r = torch.div(x, y)

# # print(r)

# # x = torch.rand(6, 3)
# # print(x)
# # print(x[:, 1])
# # print(x[0, :])
# # print(x[0, 0])
# # print(x[0, 0].item())

# # x = torch.rand(4, 4)
# # print(x)

# # y = x.view(16)
# # print(y)

# # z = x.view(2, -1)
# # print(z)

# # x = torch.rand(2)
# # y = x.numpy()
# # print(x)
# # print(y)
# # y += 1
# # print(x)
# # print(y)

# # x = np.ones(5)
# # print(x)

# # y = torch.from_numpy(x)
# # print(y)

# # x += 1
# # print(x)
# # print(y)

# # if(torch.cuda.is_available()):
# #     device = torch.device('cuda')
# #     x = torch.ones(5, device=device)
# #     y = torch.ones(5)

# #     z = x + y
# #     z = z.to('cpu')
# #     a = z.numpy()
# # else: print('lol')

# # x = torch.ones(5, requires_grad = True)
# # print(x)

# x = torch.randn(3, requires_grad=True)
# print(x)

# # x.requires_grad_(False)
# # print(x)

# # x = x.detach()
# # print(x)

# with torch.no_grad():
#     x = x + 1
#     print(x)

# y = x + 2
# print(y)

# z = y * y * 2
# print(z)

# # v = torch.tensor([0.1, 1.0, 0.001], dtype=torch.float32)
# # z.retain_grad()
# # z.backward(v)
# # print(z.grad)

weights = torch.ones(4, requires_grad=True)

for epoch in range(3):
  model_output = (weights * 3).sum()
  
  model_output.backward()
  print(weights.grad)

  weights.grad.zero_()