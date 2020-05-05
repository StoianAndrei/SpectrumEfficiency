---
author: Andrei Stoian
authorEmoji: ''
categories:
- themes
- syntax
- style
- best practice
date: 2019-12-20T03:00:06.000+00:00
description: Sample article showcasing basic Markdown syntax and formatting for HTML
  elements.
enableToc: true
enableTocContent: true
hideToc: false
image: images/feature1/markdown.png
series:
- Themes Guide
tags:
- markdown
- css
- html
- themes
- R
title: Markdown Syntax Guide

---
\---

title: "Gambling Dashboard Storyboard"

output: 

  flexdashboard::flex_dashboard:

    storyboard: true

    orientation: rows

\---

\### A brief story told trough data based on Gambling data from \[Te Tari Taiwhenua | Department of Internal Affairs\]([https://www.dia.govt.nz/Gambling](https://www.dia.govt.nz/Gambling "https://www.dia.govt.nz/Gambling")) 

\`\`\`{r}

vt.lib <- "C:/Users/stoiana/win-library"

.libPaths(new = vt.lib)

require(tidyverse)

require(lubridate)

library(kableExtra)

library(knitr)

library(flexdashboard)

library(scales)

dir.data <- "data/raw"

dir.output <- "data"

dir.fn <- "R"

dir.geo <- "data/geo"

dir.bound <- "data/geo/ESRI_Shapefile_2016_Digital_Boundaries_Generalised_Clipped"

dir.stats <- "data/stats"

\### utility functions ----

source(file.path(dir.fn, "utility functions.R"))

df.data <- read_csv(file = file.path(dir.output,"all_data_pp.csv")) %>% 

   set_sensible_names() %>% 

   select(1:8) %>% 

   rename(

      TA_FINAL = \`TA_-_FINAL\`,

      NR_VENUES = \`#_VENUES\`,

      NR_OF_GAMING_MACHINES =\`#_OF_GAMING_MACHINES\`

   ) %>% 

   mutate(QUARTER = dmy(paste0("01-",QUARTER))) %>% 

   mutate(GMP = str_remove(GMP, "\\\\$")) %>% 

   mutate(GMP = as.numeric(str_remove_all(GMP, "\\\\,")))

knitr::kable(head(df.data)) %>% 

  kableExtra::kable_styling(., "striped", position = "left", font_size = 10)

\`\`\`

\*** 

__Overview__

>The community is our primary stakeholder group. Community interests include community groups for whom gambling raises funds, gamblers, and organizations that provide gambling services and research into the social effects of gambling.

The rules for gambling - the legislation and license conditions - focus on ensuring that the community benefits from the proceeds of gambling, and that the harm that gambling can cause is minimised. The primary piece of legislation that regulates gambling is the Gambling Act 2003.

The purpose of the Gambling Act is to:

\- control the growth of gambling

\- prevent and minimise the harm caused by gambling including problem gambling

\- authorise some gambling and prohibit the rest

\- facilitate responsible gambling

\- ensure the fairness and integrity of games

\- limit opportunities for crime and dishonesty associated with gambling

\- ensure that money from gambling benefits the community

\- facilitate community involvement in decisions about the provision of gambling.

__Approach to Compliance and Enforcement__

The Department's approach to compliance and enforcement in this area is set out in the document:

\- Minimising Harm - Maximising Benefit

\### \[__CRISP-DM__\]([https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining](https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining "https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining")) framework or Cross Industry standard process for Data Mining is an open standard process model that describes common approaches used by data mining experts.

\`\`\`{r}

dir.img <- "img"

knitr::include_graphics(path = file.path(dir.img,"CRISP-DM.png"))

\`\`\`

\*** 

__Business understanding__: For the limited purpose of this presentation we will only focus on the Gambling data. Internal Affairs is a strong organisation with a proud history and an exciting future. Within Internal Affairs you will discover a large range of functions and plenty of challenging work. Other data sets that could be explored : 

\- Anti-Money Laundering

\- Passports

\- Citizenship

\- Births, deaths and marriages

\- Community advice and grants

\- Gambling

\- Ministerial expense reporting

to name a few. Is at this step that the business defines the Key Performance Indicators that will dictate the investigation going forward. 

__Data understanding__

The data understanding phase of CRISP-DM involves taking a closer look at the data available for mining. This step is critical in avoiding unexpected problems during the next phase--data preparation--which is typically the longest part of a project. 

Data understanding involves accessing the data and exploring it using tables and graphics that can be organized in IBM® SPSS® Modeler using the CRISP-DM project tool. This enables you to determine the quality of the data and describe the results of these steps in the project documentation.

__Data preparation__

\[Pre-processing\]([https://en.wikipedia.org/wiki/Data_mining](https://en.wikipedia.org/wiki/Data_mining "https://en.wikipedia.org/wiki/Data_mining"))

Before data mining algorithms can be used, a target data set must be assembled. As data mining can only uncover patterns actually present in the data, the target data set must be large enough to contain these patterns while remaining concise enough to be mined within an acceptable time limit. A common source for data is a data mart or data warehouse. Pre-processing is essential to analyze the multivariate data sets before data mining. The target set is then cleaned. Data cleaning removes the observations containing noise and those with missing data. 

__Modeling__

\- Anomaly detection (outlier/change/deviation detection) – The identification of unusual data records, that might be interesting or data errors that require further investigation.

\- Association rule learning (dependency modeling) – Searches for relationships between variables. For example, a supermarket might gather data on customer purchasing habits. Using association rule learning, the supermarket can determine which products are frequently bought together and use this information for marketing purposes. This is sometimes referred to as market basket analysis.

\- Clustering – is the task of discovering groups and structures in the data that are in some way or another "similar", without using known structures in the data.

\- Classification – is the task of generalizing known structure to apply to new data. For example, an e-mail program might attempt to classify an e-mail as "legitimate" or as "spam".

\- Regression – attempts to find a function that models the data with the least error that is, for estimating the relationships among data or datasets.

\- Summarization – providing a more compact representation of the data set, including visualization and report generation.

__Evaluation__

Data mining can unintentionally be misused, and can then produce results that appear to be significant; but which do not actually predict future behavior and cannot be reproduced on a new sample of data and bear little use. Often this results from investigating too many hypotheses and not performing proper statistical hypothesis testing. A simple version of this problem in machine learning is known as overfitting, but the same problem can arise at different phases of the process and thus a train/test split—when applicable at all—may not be sufficient to prevent this from happening

__Deployment__

The general deployment process consists of several interrelated activities with possible transitions between them. These activities can occur at the __producer side__ or at the __consumer side__ or both. Because every model is unique, the precise processes or procedures within each activity can hardly be defined. Therefore, "deployment" should be interpreted as a general process that has to be customized according to specific requirements or characteristics.

\### Leaflet is a JavaScript library for creating dynamic maps that support panning and zooming along with various annotations.

\`\`\`{r}

vt.average.auckland <- df.data %>%

  filter(REGION == "Auckland") %>%

  group_by(TA_FINAL) %>%

  summarise(MEAN = mean(GMP,na.rm = TRUE)) %>%

  pull(MEAN) %>% 

  as.numeric()

vt.TIME <- df.data %>% select(QUARTER) %>% mutate(MIN = min(QUARTER)

                                       ,MAX = max(QUARTER)

                                       ,INTERVAL = interval(MIN,MAX)

                                       ,DURATION = as.numeric(as.duration(INTERVAL),"years")) %>% 

  select(DURATION) %>% 

  unique() %>% 

  pull(DURATION)

content <- paste(sep = "<br/>",

  "<b><a href='[https://www.dia.govt.nz/Gambling](https://www.dia.govt.nz/Gambling "https://www.dia.govt.nz/Gambling")'>Te Tari Taiwhenua | Department of Internal Affairs</a></b>",

  "Aucklnad average GMP is:",dollar(x = vt.average.auckland,accuracy = 1),

  "Over a period of 4 years and a half"

)

library(leaflet)

leaflet() %>%

  addTiles() %>%

  addMarkers(lng=174.768, lat=-36.852, popup=content)

\`\`\`

\***

A table can only tell you a figure number. Add the content on a map and it starts to tell a story.

[https://rstudio.github.io/leaflet/](https://rstudio.github.io/leaflet/ "https://rstudio.github.io/leaflet/")

\- Interactive panning/zooming

\- Compose maps using arbitrary combinations of map tiles, markers, polygons, lines, popups, and GeoJSON.

\- Create maps right from the R console or RStudio

\- Embed maps in knitr/R Markdown documents and Shiny apps

\- Easily render Spatial objects from the sp package, or data frames with latitude/longitude columns

\- Use map bounds and mouse events to drive Shiny logic

\### d3heatmap creates interactive D3 heatmaps including support for row/column highlighting and zooming.

\`\`\`{r}

library(d3heatmap)

matrix <- df.data %>% 

            filter(QUARTER =="2019-12-01" & REGION == "Auckland") %>% 

            select(GMP,NR_VENUES,NR_OF_GAMING_MACHINES) %>% 

  as.data.frame()

rownames(matrix) <- df.data %>% filter(QUARTER =="2019-12-01" & REGION == "Auckland") %>% select(TERRITORIAL_AUTHORITY) %>% pull(TERRITORIAL_AUTHORITY)

d3heatmap(matrix, scale="column", colors="Blues")

\`\`\`

\***

d3heatmap is the best way to compare at a glance which Council based on number of venues and machines versus gambling machines proceeds(GMP)

[https://github.com/rstudio/d3heatmap/](https://github.com/rstudio/d3heatmap/ "https://github.com/rstudio/d3heatmap/")

\- Highlight rows/columns by clicking axis labels

\- Click and drag over colormap to zoom in (click on colormap to zoom out)

\- Optional clustering and dendrograms, courtesy of base::heatmap

\### Dygraphs provides rich facilities for charting time-series data in R and includes support for many interactive features.

\`\`\`{r}

library(dygraphs)

vt.time_akl <- df.data %>% 

  filter(TERRITORIAL_AUTHORITY == "Auckland Council - Devonport - Takapuna") %>% 

            select(QUARTER) %>% 

  arrange(QUARTER) %>%  pull(QUARTER)

vt.gmp_akl <- df.data %>% 

   filter(TERRITORIAL_AUTHORITY == "Auckland Council - Devonport - Takapuna") %>% 

  arrange(QUARTER) %>%

  mutate(GMP = GMP / 10e5) %>% pull(GMP)

          

ts.Takapuna <- as.ts(vt.gmp_akl,start = min(vt.time_akl),end = max(vt.time_akl))

dygraph(ts.Takapuna, main = "Auckland Council - Devonport - Takapuna Proceeds from 2019-01-01 to 2019-12-01",ylab = "Milions") %>% 

    dyRangeSelector()

\`\`\`

\***

Investigating periodicity withing the Auckland Council - Devonport - Takapuna.  

[https://rstudio.github.io/dygraphs/](https://rstudio.github.io/dygraphs/ "https://rstudio.github.io/dygraphs/")

\- Automatically plots xts time series objects (or any object convertible to xts).

\- Highly configurable axis and series display (including optional second Y-axis).

\- Rich interactive features including zoom/pan and series/point highlighting.

\- Display upper/lower bars (e.g. prediction intervals) around series.

\- Various graph overlays including shaded regions, event lines, and point annotations.

\### Plotly provides bindings to the plotly.js library and allows you to easily translate your ggplot2 graphics into an interactive web-based version.

\`\`\`{r}

library(plotly)

df.plot <- df.data %>% 

  group_by(QUARTER,REGION) %>% 

  summarise(SUM = sum(NR_VENUES))

p <- ggplot(data = df.plot, aes(x = QUARTER,y = SUM, color = REGION)) +

            geom_line(position = "dodge")+

  labs(

    x = "",

    y = "Number of venues",

    title = "Number of venues over time by Region, Auckland is on a downward trend")

    

ggplotly(p)

\`\`\`

\***

[https://plot.ly/ggplot2/](https://plot.ly/ggplot2/ "https://plot.ly/ggplot2/")

If you use ggplot2, \`ggplotly()\` converts your plots to an interactive, web-based version! It also provides sensible tooltips, which assists decoding of values encoded as visual properties in the plot.

plotly supports some chart types that ggplot2 doesn't (such as 3D surface, point, and line plots). You can create these (or any other plotly) charts using \`plot_ly()\`.

\### Copyright

\`\`\`{r}

dir.img <- "img"

knitr::include_graphics(path = file.path(dir.img,"DIA.jpg"))

\`\`\`

\***

CC-BY

This work is licensed under the Creative Commons Attribution 4.0 licence. In essence, you are free to copy, distribute and adapt the work as long as you attribute the work to the Department of Internal Affairs (and abide by the other licence terms – see the plain English licence terms at creativecommons.org/licenses/by/4.0). Please note that neither the DIA logo nor the New Zealand Government logo may be used in any way which infringes any provision of the Flags, Emblems, and Names Protection Act 1981 – attribution to the DIA should be in written form and not by reproduction of the DIA logo or New Zealand Government logo.

In all cases, the material must be reproduced accurately and not be used in a misleading context. Where the material is being published or issued to others, the source of the material and its copyright status must be acknowledged.

The permission to use Crown copyright material does not extend to any material on this site that is identified as being the copyright of a third party. Authorisation to reproduce any such material must be obtained from the copyright holders concerned.