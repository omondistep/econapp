#!/bin/bash

# Simple script to add a new lesson to the website
# Usage: ./add-lesson.sh

echo "=== Economics Daily - Add New Lesson ==="
echo

# Get lesson details
read -p "Enter lesson date (e.g., Feb 3, 2026): " lesson_date
read -p "Enter category: " category
read -p "Enter lesson title: " title
read -p "Enter brief description: " description

# Create lesson HTML
lesson_html="<article class=\"lesson-card\">
    <div class=\"lesson-header\">
        <span class=\"lesson-date\">$lesson_date</span>
        <span class=\"lesson-category\">$category</span>
    </div>
    <h3>$title</h3>
    <p>$description</p>
    <div class=\"lesson-content\">
        <h4>Real-World Application:</h4>
        <ul>
            <li><strong>Individual:</strong> [Add individual impact]</li>
            <li><strong>Business:</strong> [Add business impact]</li>
            <li><strong>Government:</strong> [Add policy impact]</li>
        </ul>
    </div>
</article>"

echo
echo "Generated lesson HTML:"
echo "====================="
echo "$lesson_html"
echo
echo "Copy this HTML and paste it into index.html in the lessons-grid section."
echo "Remember to customize the Real-World Application section!"
