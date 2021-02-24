
# importing packages
import seaborn as sns
import matplotlib.pyplot as plt

# loading dataset
data = sns.load_dataset("tips")

# plot the swarmplot
# hue by smoker
# dodge = True
sns.swarmplot(x = "sex", y = "total_bill", hue = "smoker",
			data = data, dodge = True)
plt.show()

