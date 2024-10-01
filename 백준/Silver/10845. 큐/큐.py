from collections import deque
import sys

N = int(sys.stdin.readline().strip())

dq = deque()

for i in range(N):
  cmd = sys.stdin.readline().strip().split()
  if cmd[0] == 'push':
    dq.append(cmd[1])
  elif cmd[0] == 'pop':
    if len(dq) != 0:
      print(dq.popleft())
    else:
      print(-1)
  elif cmd[0] == 'size':
    print(len(dq))
  elif cmd[0] == 'empty':
    if len(dq) == 0:
      print(1)
    else:
      print(0)
  elif cmd[0] == 'front':
    if len(dq) != 0:
      print(dq[0])
    else:
      print(-1)
  elif cmd[0] == 'back':
    if len(dq) != 0:
      print(dq[-1])
    else:
      print(-1)