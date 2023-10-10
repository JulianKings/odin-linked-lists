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
        if(this.head() === null)
        {
            this.initial = new Node(value);
        } else {
            this.tail().updateNext(new Node(value));

        }

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
            this.at(this.size() - 2).updateNext(null);
        } else if(this.size() > 0)
        {
            this.initial = null;
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
}