---
title: "Understanding Data Science: Matplotlib"
date: 2020-09-04T22:24:18+05:30
draft: false
emoji: "📈"
description: "A novice's handbook to matplotlib for Data Visualization and Exploration in Python."
slug: "understanding-data-science-tools-matplotlib"
url: "understanding-data-science-tools-matplotlib"
tags: ["ml", "data-science", "matplotlib"]
syndicate: "false"
diagram: true
graph: true
---

> Matplotlib is a Python 2D plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments across platforms.

## What is Matplotlib

**Matplotlib** as inferred by its name, is a plotting library, more specifically a python plotting library. It allows us to turn our data into pretty visualization known as `plots` or `figures`.

`Matplotlib` comes under the Data Analysis section of the Data Science pipeline.

## Why NumPy

> 🤔&nbsp;&nbsp; Why Matplotlib and not any other plotting library ?

- **Community** - It's built using `NumPy arrays` and `Pandas` dataframe.
- **Integration** - It integrates directly with Pandas.
- **Friendly** - It's beginner friendly with simple to use interface.

## Workflow

What are we going to do,

{{<mermaid "01" "Illustrates the Mathplotlib workflow">}}
graph LR;
   A["1. Create Data "]-->B["2. Create plot(figure)"];
   B-->C["3. Plot data (axes on figure)"];
   C-->D["4. Customize plot"];
   D-->E["5. Save/share plot"];
{{</mermaid>}}

## Get Started

First import the `matplotlib` dependencies in the `jupyter notebooks`, and press `shift` and `enter` to run the cell.

```python
%matplotlib inline
import matplotlib.pyplot as plt
```

> The `%` sign here is a magic command. `%matplotlib inline` states `jupyter` to plot all matplotlib visualizations within the notebook.

The simplest way to create a plot in `matplotlib`,

```python
# Create a simple plot
plt.plot();
plt.show();
```

> Nothing would appear since we didn't specify any data that needs to be plotted

## Stateless Plot

> 💡&nbsp;&nbsp;&nbsp; `pyplot` API is generally less-flexible than the object-oriented API. [More information on the difference](https://matplotlib.org/3.3.1/tutorials/introductory/lifecycle.html#sphx-glr-tutorials-introductory-lifecycle-py).

To create a simple `line` graph,

```python
plt.plt([1,2,3,4])
```

To specify `x,y` axis and then plot a graph,

```python
x = [1, 2, 3, 4]
y = [11, 22, 33, 44]

plt.plot(x, y)
```

## Three Methods of Plotting

Below mentioned are the three prominent ways of plotting a graph using matplotlib mostly found throughout web (mostly `stackoverflow`);

```python
# Creating a plot with the 1st version, confusing way (Naah)
fig = plt.figure()
ax = fig.add_subplot()
plt.show()
```

```python
# Creating a plot with the 2nd version, verbose way (Naah)
fig = plt.figure()
ax = fig.add_axes([1, 1, 1, 1])
ax.plot(x, y)
plt.show()
```

```python
# Easier and more robust going forward (Recommended)
fig, ax = plt.subplots()
ax.plot(x, y);
```

## Anatomy of a Matplotlib Plot

Lets dissect a Matplotlib plot and understand its parts,

- **Figure** - the subplots collective is known as a figure.
- **Title** - is the centermost heading of the figure.
- **Legend** - is the labeling with colors which denotes the data points.
- **Axes** - a subplot inside the figure. It starts with `0`. i.e. `Axes 0`
- **x-axis-label** - label which appears on the `x` axis.
- **y-axis-label** - label which appears on the `y` axis.

The object-oriented method comes here;

```python
# This is where the object orientated name comes from 
type(fig), type(ax) # -> (matplotlib.figure.Figure, matplotlib.axes._subplots.AxesSubplot)
```

## Matplotlib Workflow

The `matplotlib` workflow as a single-cell,

```python
# A matplotlib workflow

# 0. Import and get matplotlib ready
%matplotlib inline
import matplotlib.pyplot as plt

# 1. Prepare data
x = [1, 2, 3, 4]
y = [11, 22, 33, 44]

# 2. Setup plot
fig, ax = plt.subplots(figsize=(10,10))

# 3. Plot data
ax.plot(x, y)

# 4. Customize plot
ax.set(title="Sample Simple Plot", xlabel="x-axis", ylabel="y-axis")

# 5. Save & show
fig.savefig("path/to/save/simple-plot.png")
```

## Common Visualization

In this section we'll build some of the most common types of plots using `NumPy` arrays.

> Make sure you have imported the `NumPy` module -> `import numpy as np`

- `line`
- `scatter`
- `bar`
- `hist`
- `subplots()`

### Line

Well it all starts with a line plot of `x^2`,

```python
# Create an array
x = np.linspace(0, 10, 100)

# The default plot is line
fig, ax = plt.subplots()
ax.plot(x, x**2);
```

### Scatter

Processing a `scatter` plot with the same data points,
```python
fig, ax = plt.subplots()
ax.scatter(x, np.exp(x));
```

To generate a `sine` wave using scatter plot,

```python
fig, ax = plt.subplots()
ax.scatter(x, np.sin(x));
```

### Bar

#### Vertical

```python
# Plots from a dictionary
car_prices = {"BMW i8": 30000,
                     "Chevrolet Camaro": 40000,
                     "Bugatti Veyron": 50000}
fig, ax = plt.subplots()
ax.bar(car_prices.keys(), car_prices.values())
ax.set(title="AMW Car Store", ylabel="Price ($)");
```

#### Horizontal

```python
fig, ax = plt.subplots()
ax.barh(list(car_prices.keys()), list(car_prices.values()));
```

### Histogram

> Histogram is mostly used for illustrating/ visualizing the distribution

```python
# Make some data from a normal distribution
x = np.random.randn(10000) # pulls data from a normal distribution

fig, ax = plt.subplots()
ax.hist(x);
```

### Subplot

To generate multiple subplots in a figure,

```python
# Create multiple subplots
fig, ax = plt.subplots(nrows=2, ncols=2, figsize=(10, 5))

# Index to plot data
ax[0, 0].plot(x, x/2);
ax[0, 1].hist(np.random.randn(10000));
ax[1, 0].bar(car_prices.keys(), car_prices.values());
ax[1, 1].scatter(np.random.random(10), np.random.random(10));
```

### Conclusion

Although, pretty visualizations are pleasing to the eye, as a data scientist it's more important to create visualizations which are meaningful and conveys the data accurately.

With that said, you're now a single step closer to creating to creating wonderful plots using `Matplotlib`.

### Resources

- [Matplotlib v3.3.1](https://matplotlib.org/3.3.1/tutorials/introductory/pyplot.html#sphx-glr-tutorials-introductory-pyplot-py) by Matplotlib Development Team.
- [Matplotlib Lifecycle](https://matplotlib.org/3.3.1/tutorials/introductory/lifecycle.html#sphx-glr-tutorials-introductory-lifecycle-py) by Matplotlib Development Team.
- [DataHack platform](https://datahack.analyticsvidhya.com/?utm_source=blog&utm_medium=beginner-guide-matplotlib-data-visualization-exploration-python) by Analytics Vidhya.
