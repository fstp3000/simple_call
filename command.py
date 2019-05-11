import subprocess
MyOut = subprocess.Popen(['node', 'call.js'], 
                         stdout=subprocess.PIPE, 
                         stderr=subprocess.STDOUT)
stdout,stderr = MyOut.communicate()
print(stdout)
print(stderr)
