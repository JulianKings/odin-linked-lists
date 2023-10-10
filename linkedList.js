class LinkedList
{
    constructor()
    {
        this.initial = null;
    }

    head()
    {
        return this.initial;
    }

    size()
    {
        if(this.initial === null)
        {
            return 0;
        }

        let listSize = 0;
        let currentNode = this.initial;
        while(currentNode !== null)
        {
            listSize += 1;
            currentNode = currentNode.next;
        }

        return listSize;
    }

    tail()
    {
        if(this.size() > 0)
        {
            let currentNode = this.initial;
            while(currentNode.next !== null)
            {
                currentNode = currentNode.next;
            }
            return currentNode;
        }

        return null;
    }

    append(value)
    {
        let futureNode = new Node(value);
        if(this.head() === null)
        {
            this.initial = futureNode;
        } else {
            this.tail().updateNext(futureNode);
        }

        return futureNode;

    }

    prepend(value)
    {
        if(this.head() === null)
        {
            this.initial = new Node(value);
        } else {
            let oldInitial = this.initial;            
            this.initial = new Node(value);
            this.initial.updateNext(oldInitial);
        }

        return this.initial;

    }

    at(index)
    {
        if(index > this.size())
        {
            return null;
        } else if(index == 0)
        {
            return this.initial;
        } else {
            let currentNode = this.initial;
            for(let i = 0; i < index; i++)
            {
                if(currentNode !== null)
                {
                    currentNode = currentNode.next;   
                }             
            }

            return currentNode;
        }
    }

    pop()
    {
        if(this.size() > 1)
        {
            let oldNode = this.at(this.size() - 1);
            this.at(this.size() - 2).updateNext(null);
            return oldNode;
        } else if(this.size() > 0)
        {
            let oldInitial = this.initial;
            this.initial = null;
            return oldInitial;
        }
    }

    contains(search_value)
    {
        if(this.size() > 0)
        {
            let currentNode = this.initial;
            while(currentNode !== null)
            {
                if(currentNode.value === search_value)
                {
                    return true;
                }
                currentNode = currentNode.next;
            }         

        }

        return false;
    }

    find(search_value)
    {
        if(this.size() > 0)
        {
            let currentNode = this.initial;
            let currentIndex = 0;
            while(currentNode !== null)
            {
                if(currentNode.value === search_value)
                {
                    return currentIndex;
                }
                currentIndex += 1;
                currentNode = currentNode.next;
            }         
        }

        return null;
    }

    toString()
    {
        if(this.size() > 0)
        {
            let currentNode = this.initial;
            let returnString = "";
            while(currentNode !== null)
            {
                returnString += `( ${currentNode.value} ) => `;
                currentNode = currentNode.next;
            }         
            returnString += " null";
            return returnString;
        }

        return "empty";
    }

    insertAt(value, index)
    {
        if(index >= this.size())
        {
            return this.append(value);
        } else {
            let previous = this.at(index - 1);
            let next = previous.next;
            let futureNode = new Node(value);
            previous.updateNext(futureNode);
            if(next !== null)
            {
                futureNode.updateNext(next);
            }
            return futureNode;
        }
    }

    removeAt(index)
    {
        if(index >= this.size())
        {
            return this.pop();
        } else {
            let previous = this.at(index - 1);
            let current = this.at(index);
            let next = current.next;
            if(next !== null)
            {
                previous.updateNext(next);
            } else {
                previous.updateNext(null);
            }
            return current;
        }
    }
}